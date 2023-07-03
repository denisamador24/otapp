import CardInput from './CardInput.jsx';

const InputMultiLanguage = ({ name, values, changeValues}) => {
  
  const handleChangeValue = (key, value) => {
    // key of the language
    const newValues = JSON.parse(JSON.stringify(values))
    newValues[key] = value;
   changeValues(newValues);
    
  }
  
  return (
    <>
      <CardInput>
        <p>{name} ES: </p>
        <input type='text'  value={values.es} onChange={e => handleChangeValue('es', e.target.value)}/>
        
        <p>{name} EN: </p>
        <input type='text'  value={values.en} onChange={e => handleChangeValue('en', e.target.value)}/>
        
        <p>{name} FR: </p>
        <input type='text'  value={values.fr} onChange={e => handleChangeValue('fr', e.target.value)}/>
      </CardInput>
    </>
  );
}

export default InputMultiLanguage;