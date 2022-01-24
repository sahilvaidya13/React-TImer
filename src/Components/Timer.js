import React, { useState, useEffect } from 'react';
import './Timer.css'
const Timer = () => {
  const [currnum, setNum] = useState(0);
  const [isRunning, setRunning] = useState(false);
  useEffect(() => {
    if (isRunning) {
      const myint = setInterval(() => {
        setNum((c) => c + 1);
      }, 1000);
      return () => {
        clearInterval(myint);
      };
    }
  }, [isRunning]);

  return (
    <div>
      <h1>Timer</h1>
      <h1>{currnum}</h1>

      {isRunning ? (
        <i onClick={() => setRunning(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pause-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
          </svg>
        </i>
      ) : (
        <i onClick={() => setRunning(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </i>
      )}
      <button class="btn btn-primary" onClick={() => setNum(0)}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
{
  /* <button onClick={() => setRunning(true)}></button> */
}
