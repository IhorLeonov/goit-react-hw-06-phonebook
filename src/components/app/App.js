import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { MainTitle, Phonebook, SecondTitle } from 'components/app/App.styled';
import { Notification } from 'components/notification/Notification';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <Layout>
      <Phonebook>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SecondTitle>Contacts</SecondTitle>
        <Filter />
        {contacts === [] ? (
          <Notification message={'Phonebook is empty!'} />
        ) : (
          <ContactList />
        )}

        <GlobalStyle />
      </Phonebook>
    </Layout>
  );
};
