import React from 'react'
import useTimer from '../Hooks/useTimer';

const TimerApp = () => {
    const { timer, handleReset, handleStop, handleStart } = useTimer();
    
  return (
    <div className="main_div">
        <h1>
          <u>Stop Watch</u>
        </h1>
        <div className="timer_div">
          <p>{("0" + Math.floor((timer / 600000) % 60)).slice(-2)}</p>{" "}
          <h3>hour</h3>
          &nbsp; &nbsp; <p>:</p> &nbsp; &nbsp;&nbsp; &nbsp;
          <p>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}</p>
          <h3>minute</h3>
          &nbsp; &nbsp;<p>:</p> &nbsp; &nbsp;&nbsp; &nbsp;
          <p>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)} </p>
          <h3>sec</h3>
        </div>
        <div className="btn_div">
          <button className="btn start_btn" onClick={handleStart}>
            START
          </button>
          <button className="btn stop_btn" onClick={handleStop}>
            STOP
          </button>
          <button className="btn reset_btn" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
  )
}

export default TimerApp