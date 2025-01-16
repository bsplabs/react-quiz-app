import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  // console.log('QuestionTimer render', timeout);
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      console.log(remainingTime);
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      console.log('CLEARING INTERVAL');
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
