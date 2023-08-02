import './change_language.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ChangeLanguageTwo = () => {
  const { i18n } = useTranslation('translation');

  const usaFlag = '/images/usa.png';
  const spainFlag = '/images/spain.png';
  const franceFlag = '/images/france.png';


  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage)
  };

  return (
    <div className='change-language'>
      <FormControl>
        <Select onChange={handleLanguageChange}
          value={i18n.language}
          sx={{
            backgroundColor: 'white',
            height: '38px '
          }}
        >
          <MenuItem key='m-es' value='es'>
            <LanguageMenuItem flag={spainFlag} text='Español' />
          </MenuItem>

          <MenuItem key='m-en' value='en'>
          <LanguageMenuItem flag={usaFlag} text='English' />
          </MenuItem>

          <MenuItem key='m-fr' value='fr'>
            <LanguageMenuItem flag={franceFlag} text='Français' />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

function LanguageMenuItem({ flag, text }) {

  return (
    <div className='center'>
      <img 
        width='32'
        src={flag}
        alt={text} 
        style={{
           width: '32px',
           marginRight: '4px'
          }} />
      <span>{text}</span>
    </div>
  )
}

export default ChangeLanguageTwo;
