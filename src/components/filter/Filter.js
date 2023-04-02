import { Label, Input } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
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
