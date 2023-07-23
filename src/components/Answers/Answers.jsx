// styles component
import './answers.css';

//react 
import { useState } from 'react';

const Answers = ({ question, onChangeAnswer }) => {
  const [indexSelctedItem, setIndexSelctedItem] = useState(null);

  const handleSelectAnswer = (key, index) => {
    onChangeAnswer(key);
    setIndexSelctedItem(index)
  }
  const answerItems = Object.keys(question.answers).map((key, index) => {
      return (
        <li 
          key={key}
          className={ indexSelctedItem === index ? 'answer-item answer-item--selected' : 'answer-item'}
        >
          <div 
            onClick={() => handleSelectAnswer(key, index)}
          >
            {key + ') ' + question.answers[key]}
          </div>
        </li>
      );
  });

  return (
    <ul className='answers-container'>{answerItems}</ul>
  )
}

export default Answers;