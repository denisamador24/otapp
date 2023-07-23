import './timer.css';
import React, { useState, useEffect } from 'react';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

const Timer = ({time, setTime}) => {

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='timer'>
      <p><TimerOutlinedIcon/>: {time}s</p>
    </div>
  );
};

export default Timer;
