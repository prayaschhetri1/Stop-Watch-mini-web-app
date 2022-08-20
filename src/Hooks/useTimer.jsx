import React from "react";
import { useRef } from "react";
import { useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
  };
  const handleStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleReset = () => {
    handleStop();
    setTimer(0);
  };
  return {timer,handleReset,handleStop,handleStart};
};

export default useTimer;
