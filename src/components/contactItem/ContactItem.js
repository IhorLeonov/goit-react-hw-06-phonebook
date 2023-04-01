import PropTypes from 'prop-types';
import { ButtonDelete, Item } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <ButtonDelete
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
          // onDelete(id);
        }}
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
