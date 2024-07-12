import React, { useState, useEffect } from "react";
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timer);
          if (isBreak) {
            setTimeLeft(1500); // Reset to 25 minutes 
          } else {
            setTimeLeft(300); // 5 minutes  break 
          }
          setIsBreak(!isBreak);
          setIsRunning(false); 
        } else {
          setTimeLeft((prevTime) => prevTime - 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(1500);
  };

  const formatTime = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="timer-container text-white">
      <h1>Timer</h1>
      <h1 id="timer">{formatTime(timeLeft)}</h1>
      <div className="controls">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
