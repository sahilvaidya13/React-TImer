import React, { useState, useEffect } from "react";

const Timer = () => {
  const [currnum, setNum] = useState(0);
  const [isRunning, setRunning] = useState(false);
  useEffect(() => {
    if (isRunning) {
      const myint = setInterval(() => {
        setNum((c) => c + 1);
      }, 1000);
      console.log("running");
      return () => {
        clearInterval(myint);
        console.log("ended");
      };
    }
  }, [isRunning]);

  return (
    <div>
      <h1>{currnum}</h1>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setNum(0)}>Reset</button>
    </div>
  );
};

export default Timer;
