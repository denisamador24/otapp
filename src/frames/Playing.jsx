// styles component
import './Playing.css';

// sounds
import wrongAnswerSound from '/src/audio/wrong-answer.mp3';
import rightAnswerSound from '/src/audio/right-answer.mp3';

// translation
import { useTranslation } from 'react-i18next';

// utils
import  resolveImg  from '../utils/imageResolve.js';
import { questionsEs, shuffleArray } from '../utils/questions_es.js';
import { questionsEn } from '../utils/questions_en.js';

// Components
import Timer from '../components/Timer.jsx';
import Answers from '../components/Answers.jsx';
import Music from '../components/Music.jsx';
import AnswerFeedback from '../components/AnswerFeedback.jsx';

// @mui components
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

//react 
import { useState, useEffect, useRef } from 'react';


const Playing = ({setGame}) => {
  const { t, i18n } = useTranslation(); 
  const [time, setTime] = useState(60);
  const [points, setPoints] = useState(0);
  const [goodAnswers, setGoodAnswers] = useState(0);
  const [badAnswers, setBadAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isHidenAnswerFeedBack, setIsHidenAnswerFeedBack] = useState(true);
  const [isGoodAnswer, setIsGoodAnswer ] = useState(null);
  
  const rightAnswerRef = useRef(null);
  const wrongAnswerRef = useRef(null);
  
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
  
  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    
  }

  const handleContinue = () => {
    setIsHidenAnswerFeedBack(true);
    setIndexQuestion(n => n + 1);
  }
  const handleCheckAnswer = () => {
    console.log(question, selectedAnswer);
    if (question.goodAnswer === selectedAnswer) {
        rightAnswerRef.current.play();
        setIsGoodAnswer(true);
        setGoodAnswers(goodAnswers => goodAnswers + 1);
        setPoints(n => n + 5);
        setTime(n => n + 5);
      } else {
        wrongAnswerRef.current.play();
        setIsGoodAnswer(false);
        setBadAnswers(badAnswers => badAnswers + 1);
        setPoints(n => {
          if (n > 3)
            return (n - 3);
          else
            return n;
        });
        setTime(n => n - 3);
      }
      
      setIsHidenAnswerFeedBack(false);
      setSelectedAnswer('');
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
          key={question.question}
          question={question}
          onChangeAnswer={handleSelectAnswer}
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
        <div className='playing__button-continue'>
          {selectedAnswer !== '' 
            ? <Button
                sx={{
                  width: '100%',
                }}
                variant='contained'
                onClick={handleCheckAnswer}
              >{ t('check')}</Button>
            
            : <Button
                sx={{
                  width: '100%',
                }}
                variant='contained'
                onClick={handleCheckAnswer}
                disabled
              >{ t('check')}</Button>
          }
        </div>
        <AnswerFeedback 
          isHiden={isHidenAnswerFeedBack}
          isGoodAnswer={isGoodAnswer}
          onContinue={handleContinue}
          goodAnswer={question.answers[question.goodAnswer]}
        />
      </div>
      <audio ref={rightAnswerRef} src={rightAnswerSound} />
      <audio ref={wrongAnswerRef} src={wrongAnswerSound} />
    </div>
  );
}

export default Playing;