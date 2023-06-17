import './Answers.css'

const Answers = ({ question, setGoodAnswers, setBadAnswers, 
setIndexQuestion, setPoints, setTime}) => {

  const handleClick = (key) => {
    if (question.goodAnswer === key) {
      setGoodAnswers(goodAnswers =>  goodAnswers + 1);
      setPoints(n => n + 5);
      setTime(n => n + 5);
    } else {
      setBadAnswers(badAnswers => badAnswers + 1);
      setPoints(n => {
        if (n > 3)
          return (n - 3);
        else 
          return n;
      });
      setTime(n => n - 3);
    }
    setIndexQuestion(n => n+1);
  }

  const answerItems = Object.keys(question.answers).map((key) => {
      return (
        <li key={key}  className='answer-item'>
          <div 
            onClick={() => handleClick(key)}
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