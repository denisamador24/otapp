const InputMultiLanguage = ({ title, values, setValues}) => {
  
  const handleChangeValue = (key, value) => {
    // key of the language
    setValues({
      ...values,
      key: value
    })
  }
  
  return (
    <>
      <CardInput>
        <p>{title} ES: </p>
        <input type='text'  value={values.es} onChange={e => handleChangeValue('es', e.target.value)}/>
        
        <p>{title} EN: </p>
        <input type='text'  value={values.en} onChange={e => handleChangeValue('en', e.target.value)}/>
        
        <p>{title} FR: </p>
        <input type='text'  value={values.fr} onChange={e => handleChangeValue('fr', e.target.value)}/>
      </CardInput>
    </>
  );
}

export default InputMultiLanguage;