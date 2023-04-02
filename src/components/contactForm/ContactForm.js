import toast, { Toaster } from 'react-hot-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  Field,
  FormLabel,
  ErrorMessage,
  ButtonSubmit,
} from './ContactForm.styled';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const notifyError = message => toast.error(message);

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .trim(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const { name, number } = values;

        if (
          contacts.some(
            current => current.name.toLowerCase() === name.toLowerCase()
          )
        ) {
          return notifyError(`${name} is already in contacts.`);
        }

        dispatch(addContact(name, number));
        actions.resetForm();
      }}
    >
      <Form>
        <FormLabel>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel>
          Number
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        <Toaster position="top-left" toastOptions={{ duration: 3000 }} />
      </Form>
    </Formik>
  );
};
