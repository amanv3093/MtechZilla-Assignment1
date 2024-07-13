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
      <div className=" timer-container mt-16 w-full flex items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center min-w-[350px] bg-[#414345] text-text p-[2.5em_2em] rounded-[50px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),-2px_17px_33.4px_rgba(0,0,0,0.086),1px_7px_20px_2px_rgba(0,0,0,0.12)]">
          <h1 className="text-2xl font-semibold pb-6">Pomodoro Timer</h1>
          <div
            style={{ boxShadow: "0px 0px 20px 0px hsla(0,0%,100%,0.2)" }}
            className="flex flex-col items-center  rounded-full p-8 w-[180px] h-[180px]"
          >
            <h1 className="text-xl font-bold">
              {isFiveActive ? "Break" : "Session"}
            </h1>
            <h1 className="mb-[0.3em] text-[50px] font-normal z-10">
              {time(timeLeft)}
            </h1>
          </div>
          <div className="flex gap-4 pt-14">
            <button
              onClick={startTimer}
              disabled={isRunning}
              style={{ boxShadow: "0px 0px 20px 0px hsla(0,0%,100%,0.2)" }}
              class="bg-[#414345] text-white border-none text-xl font-bold px-7 py-2 rounded-[6px] cursor-pointer shadow-md transition duration-200"
            >
              Start
            </button>
            <button
              onClick={pauseTimer}
              disabled={!isRunning}
              style={{ boxShadow: "0px 0px 20px 0px hsla(0,0%,100%,0.2)" }}
              class="bg-[#414345] text-white border-none text-xl font-bold px-7 py-2 rounded-[6px] cursor-pointer shadow-md transition duration-200"
            >
              Pause
            </button>
            <button
              onClick={resetTimer}
              style={{ boxShadow: "0px 0px 20px 0px hsla(0,0%,100%,0.2)" }}
              class="bg-[#414345] text-white border-none text-xl font-bold px-7 py-2 rounded-[6px] cursor-pointer shadow-md transition duration-200"
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
