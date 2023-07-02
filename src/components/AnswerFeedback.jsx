// styles component
import './AnswerFeedback.css';

// Translation 
import { useTranslation } from 'react-i18next';

// @mui icons
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// @mui Components
import Button from '@mui/material/Button';

const AnswerFeedback = ({isHiden, isGoodAnswer, onContinue, goodAnswer}) => {
  const { t } = useTranslation();
  
  let feedbackcontainer;

  if (isGoodAnswer) { 
    feedbackcontainer =
      <section 
        className={'answer-feedback answer-feedback--good-answer ' + (isHiden && 'answer-feedback--hiden')}>
        <div>
          <div className='answer-feedback__title'>
            <CheckCircleOutlineIcon color='sucessful' />
            <p>{ t('good') }</p>
          </div>
          
          <Button
            size='large'
            sx={{
              "width": "100%",
              "backgroundColor": "rgba(87,204,2,255)",
              "color": "white"
              
            }}
            onClick={onContinue}
          >{ t('continue') }</Button>
          
        </div>
      </section>
    
  } else {
    feedbackcontainer =
      <section 
        className={ 'answer-feedback answer-feedback--bad-answer '  + (isHiden ? 'answer-feedback--hiden' : '') }>
        <div>
          <div className='answer-feedback__title'>
            <HighlightOffIcon />
            <p>{ t('incorrect') }</p>
          </div>
          
          <div className='answer-feedback__good-answer'>
            <p>{t('goodAnswerIs')}</p>
            <span>{goodAnswer}</span>
          </div>
          
          <Button
            size='large'
            sx={{
              "width": "100%",
              "backgroundColor": "rgba(255,75,76,255)",
              "color": "white"
              
            }}
            onClick={onContinue}
          >{isGoodAnswer ? "OK" : t('continue')}</Button>
          
        </div>
      </section>
    
  }
  
  return (feedbackcontainer);
}

export default AnswerFeedback;