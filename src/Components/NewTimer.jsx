import React from 'react'
import useTimer from './../Hooks/useTimer';

const NewTimer = () => {

    const {handleReset,handleStop,handleStart} = useTimer()
  return (
    <div>
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
  )
}

export default NewTimer