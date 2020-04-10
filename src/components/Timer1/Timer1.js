import React, { useState, useEffect } from 'react';
import './Timer1.css';


const Timer1 = ({time, autoplay, step}) => {
    const [isOn1, setIsOn1] = useState(autoplay); 
    const [timer1, setTimer1] = useState(time);
    const [width1, setWidth1] = useState(1000);

    const onReset1 = () => {
        setIsOn1(false);
        setTimer1(time);
        setWidth1(1000);
    };

    useEffect(() => {
        let interval1;
        if (isOn1 && timer1!==0) {
          console.log("осталось времени: " + timer1);
          interval1 = setInterval(
            () => {
              setTimer1(timer1 => timer1 - step) || setWidth1(width1 => width1 - step*100)
            },
            1000,
          );
        }
        else if(timer1 === 0){
          console.log("время вышло");
        }
        return () => clearInterval(interval1);
    }, [isOn1, timer1, step]);



    return (
       <>
      <div className="firstTimer">
      <br/>
        <div className="btn-group" role="group" aria-label="Basic example">
          { (
          <button type="button" className="btn btn-primary btn-lg" disabled={isOn1 === true} onClick={() => setIsOn1(true)}>
            Start
          </button> 
          )}
        <br/>
        { (
        <button type="button" className="btn btn-primary btn-lg" disabled={isOn1 === false} onClick={() => setIsOn1(false)}>
          Stop
        </button>
      )}
      <br/>
      <button type="button" className="btn btn-primary btn-lg" disabled={timer1 === time} onClick={onReset1}>
        Reset
      </button>
      </div>
      </div>
      <div className="line1" style={{width : width1+"px"}}>
        <div className="textContent"> 
          {timer1}
        </div>
      </div>
    
    </>
    )
}

export default Timer1
