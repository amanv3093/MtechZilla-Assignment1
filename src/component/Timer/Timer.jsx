import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isFiveActive, setIsFiveActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timer);
          if (isReset) {
            setTimeLeft(1500); // Reset to 25 minutes
            setIsFiveActive(false);
          } else {
            setTimeLeft(300);
            setIsFiveActive(true); // 5 minutes  break
          }
          setIsReset(!isReset);
          setIsRunning(false);
        } else {
          setTimeLeft((prevTime) => prevTime - 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isReset]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsReset(false);
    setTimeLeft(1500);
  };

  const time = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div>
      <Header />
      <div className="timer-container mt-16 w-full flex items-center justify-center text-white">
        <div className="h-[300px] w-[500px] flex flex-col justify-center items-center bg-[#3f3e3e] px-10 py-4 rounded-lg">
          <h1 className="text-3xl font-bold">
            {isFiveActive ? "Break Time" : "Running Time"}
          </h1>
          <h1 className="text-4xl text-center font-bold border w-[170px] py-1 rounded-md mt-6">
            {time(timeLeft)}
          </h1>
          <div className="flex gap-4 mt-6">
            <button
              onClick={startTimer}
              disabled={isRunning}
              class="bg-[#3498DB] text-white border-none text-xl font-bold px-7 py-2 rounded-[6px] cursor-pointer shadow-md transition duration-200"
            >
              Start
            </button>
            <button
              onClick={pauseTimer}
              disabled={!isRunning}
              class="bg-[#3498DB] text-white border-none text-xl font-bold px-7 py-2 rounded-[6px] cursor-pointer shadow-md transition duration-200"
            >
              Pause
            </button>
            <button
              onClick={resetTimer}
              class="bg-[#3498DB] text-white border-none text-xl font-bold px-7 py-2 rounded-[6px] cursor-pointer shadow-md transition duration-200"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
