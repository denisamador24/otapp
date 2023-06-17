import './Playing.css';
import { useTranslation } from 'react-i18next';
import  resolveImg  from '../utils/imageResolve.js';
import Timer from '../components/Timer.jsx';
import Answers from '../components/Answers.jsx';
import Music from '../components/Music.jsx';
import { questionsEs, shuffleArray } from '../utils/questions_es.js';
import { questionsEn } from '../utils/questions_en.js';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useState, useEffect } from 'react';


const Playing = ({setGame}) => {
  const { t, i18n } = useTranslation(); 
  const [time, setTime] = useState(60);
  const [points, setPoints] = useState(0);
  const [goodAnswers, setGoodAnswers] = useState(0);
  const [badAnswers, setBadAnswers] = useState(0);
  
  const [indexQuestion, setIndexQuestion] = useState(0);

  
  useEffect( () => {
    questionsEs.a = shuffleArray(questionsEs.a);
    questionsEn.a = shuffleArray(questionsEn.a);
  }, []);
  
  let question;
  if (i18n.language == 'es') {
    question = questionsEs.a[indexQuestion];
  } else {
    question = questionsEn.a[indexQuestion];
  }
  
  
  if (time < 1 || indexQuestion >= questionsEs.a.length) {
    setGame('finished');
    
    const maxScore = window.localStorage.getItem('max_score');
    if (maxScore < points) {
      window.localStorage.setItem('max_score', points.toString());
    } 
    window.localStorage.setItem('score', points)
   
  }
  
  return (
    <div>
        <div 
          className='image-background'
          style={{ 
            'background': `url(${resolveImg(question.image)}) center`}}
        >
          <div className='filter'>
            <div><img src={resolveImg(question.image)}/></div>
             <p className='question'>{question.question}</p>
          </div>
          
        </div>
      <div className='playing-content'>
     
      <div className='timer-container'>
        <Timer 
        time={time}
        setTime={setTime}
        />
      </div>
      
      <div className='music-container center'>
        <Music/>
      </div>
      <Answers 
        question={question}
        setGoodAnswers={setGoodAnswers}
        setBadAnswers={setBadAnswers}
        setIndexQuestion={setIndexQuestion}
        setPoints={setPoints}
        setTime={setTime}
      />
      <div className='points-container'>
        <p>{t('score')}: {points}</p>
      </div>
      <div className='matches-container'>
        <div className='center'>
          <CheckCircleOutlineIcon 
            sx={{ fontSize: '32px', margin:'4px'}}
            color='success'/> {goodAnswers}
        </div>
        <div className='center'>
          <HighlightOffIcon
            sx={{ fontSize: '32px', margin: '4px'}}
            color='error'/> {badAnswers}</div>
      </div>
      </div>
    </div>
  );
}

export default Playing;