// @mui components
import Button from '@mui/material/Button';

// components
import InputMultiLanguage from './InputMultiLanguage.jsx';
import CardInput from './CardInput.jsx';

// utils
import { valuesMultiLanguage } from '../utils/initValueMultiLanguage.js';

const InputList = ({ name, list, setList }) => {
  
  const handleChangeValues = (value, index) => {
    const newValuesArray = list.slice();
    newValuesArray[index] = value;
    setList(newValuesArray);
  }
  
  const handleAddItem = () => {
    setList([ ...list, valuesMultiLanguage]);
  }
  
  const handleRemoveItem = () => {
    const newServices = list.slice();
    newServices.pop()
    setList(newServices);
  }
  
  const inputListItem = list.map((it, index) => {
    return (
      <InputMultiLanguage 
        name={name + ' ' + (index + 1)}
        values={it}
        changeValues={(value) => handleChangeValues(value, index)} />
    )    
  });
  return (
    <CardInput>
      <p>{name}</p>
        <div>
      {inputListItem}
      <Button
        variant='outlined'
        onClick={handleRemoveItem}
      >-</Button>
      
      <Button
        variant='outlined'
        onClick={handleAddItem}
      >+</Button>
      
    </div>
    </CardInput>
  )
}

export default InputList;