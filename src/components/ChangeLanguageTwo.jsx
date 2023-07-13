import './ChangeLanguage.css';
import resolveImg from '../utils/imageResolve.js';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ChangeLanguageTwo = () => {
  const { i18n } = useTranslation('translation');
  
  const usaFlag = 'src/images/usa.png';
  const spainFlag = 'src/images/spain.png';
  
  
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage)
  };

  return (
    <div className='change-language'>
      <FormControl>
        <Select onChange={handleLanguageChange}
          value={i18n.language}
          style={{ 
            'backgroundColor': 'white',
            'height': '36px',
            'color': '#1976d2'
          }}
        >
          
            <MenuItem key='m-es' value='es'>
              <div className='center'>
                <img src={spainFlag} alt='es' style={{ width: '32px' }} />
                Español
              </div>
            </MenuItem>
            
            <MenuItem key='m-en' value='en'>
              <div className='center'>
                <img src={usaFlag} alt='es' style={{ width: '32px' }}/>
                English 
              </div>
            </MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
};

export default ChangeLanguageTwo;
