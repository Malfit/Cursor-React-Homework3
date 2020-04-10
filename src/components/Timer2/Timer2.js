import React, { useState, useEffect } from 'react';
import './Timer2.css';


const Timer2 = ({time, autoplay, step}) => {
    const [isOn2, setIsOn2] = useState(autoplay); 
    const [timer2, setTimer2] = useState(time);
    const [width2, setWidth2] = useState(1000);
   
     useEffect(() => {
        let interval2;
        if (isOn2 && timer2!==0) {
          console.log("осталось времени: " + timer2);
          interval2 = setInterval(
            () => {
              setTimer2(timer2 => timer2 - step ) || setWidth2(width2 => width2 - step*10)
            },
            1000,
          );
        }
        else if(timer2 === 0){
          console.log("время вышло");      
        }
        return () => clearInterval(interval2) ;
    }, [isOn2, timer2, step, width2]);

    const onReset2 = () => {
        setIsOn2(false);
        setTimer2(time);
        setWidth2(1000);
    };

    return (
        <div>     
        <div className="secondTimer">
        <br/>
        <div className="btn-group" role="group" aria-label="Basic example">
        { (
          <button type="button" className="btn btn-primary btn-lg" disabled={isOn2 === true} onClick={() => setIsOn2(true)}>
            Start
          </button> 
        )}
        <br/>
        { (
          <button type="button" className="btn btn-primary btn-lg" disabled={isOn2 === false} onClick={() => setIsOn2(false)}>
            Stop
          </button>
        )}
        <br/>
        <button type="button" className="btn btn-primary btn-lg" disabled={timer2 === time} onClick={onReset2}>
          Reset
        </button>
        </div>
      </div>
      <div className="line2" style={{width : width2+"px"}} >
        <div className="textContent" >
          {timer2}
        </div>
      </div>
        </div>
    )
}

export default Timer2
