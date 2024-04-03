import { useState, useEffect } from "react";

const useCustomTimer = (duration) => {
  const [timer, setTimer] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, timer]);

  const startTimer = () => {
    setIsActive(true);
  };
  const pauseTimer = () => {
    setIsActive(false);
  };
  const resetTimer = () => {
    setTimer(duration);
    setIsActive(false);
  };
  return { timer, startTimer, pauseTimer, resetTimer };
};

export default useCustomTimer;
