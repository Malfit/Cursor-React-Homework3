import React from 'react';
import Timer1 from './components/Timer1';
import Timer2 from './components/Timer2';
import './App.css';

function App() {
  
  return (
   
     <div className="app">
        <Timer1 time={10} autoplay={false} step={1}/> 
        <Timer2 time={100} autoplay step={2}/>
     </div>  
    
  );
}

export default App;