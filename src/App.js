import React, { useState, useEffect } from 'react';
function App() {
  const [isOn1, setIsOn1] = useState(false); //reset
  const [timer1, setTimer1] = useState(15);

  const [isOn2, setIsOn2] = useState(false); 
  const [timer2, setTimer2] = useState(100);


  useEffect(() => {
    let interval1;
    let interval2;
    if (isOn1 && timer1!==0) {
      console.log("1");
      interval1 = setInterval(
        () => setTimer1(timer1 => timer1 - 1),
        1000,
      );
    }
    if (isOn2 && timer2!==0) {
      console.log("2");
      interval2 = setInterval(
        () => setTimer2(timer2 => timer2 - 2),
        1000,
      );
    }
    return () => clearInterval(interval1,interval2) ;
  }, [isOn1, timer1,isOn2, timer2]);

  const onReset1 = () => {
    setIsOn1(false);
    setTimer1(15);
  };

  const onReset2 = () => {
    setIsOn2(false);
    setTimer2(100);
  };

  return (
    <>
    <div className="firstSection">
      {timer1}
      <br/>
      { (
        <button type="button" onClick={() => setIsOn1(true)}>
          Start
        </button> 
      )}
      <br/>
      { (
        <button type="button" onClick={() => setIsOn1(false)}>
          Stop
        </button>
      )}
      <br/>
      <button type="button" disabled={timer1 === 15} onClick={onReset1}>
        Reset
      </button>
    </div>


        <div className="secondSection">
        {timer2}
        <br/>
        { (
          <button type="button" onClick={() => setIsOn2(true)}>
            Start
          </button> 
        )}
        <br/>
        { (
          <button type="button" onClick={() => setIsOn2(false)}>
            Stop
          </button>
        )}
        <br/>
        <button type="button" disabled={timer2 === 100} onClick={onReset2}>
          Reset
        </button>
      </div>
    </>
  );
}
export default App;