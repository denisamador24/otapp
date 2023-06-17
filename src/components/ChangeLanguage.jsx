import './ChangeLanguage.css';

import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
  
  const { i18n } = useTranslation('translation');
  
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  
  return (
    <div className='change-language'>
      <select
        value={i18n.language}
        onChange={(e) => handleChangeLanguage(e.target.value)}
      >
        <option value='es'>Español</option>
        <option value='en'>English</option>
      </select>
    </div>
  )
}

export default ChangeLanguage;