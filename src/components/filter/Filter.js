// import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      ></Input>
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
