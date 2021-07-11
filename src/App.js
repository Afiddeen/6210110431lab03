import React from 'react';
import './App.css';
import WordCard from './WordCard';


function App() {
  const word =["SHOES","SHIRT","SCARF","SUIT","SOCKS","HAT"] ;
  const newGame = () => {
    window.location.reload()
  }

  return (
    <div className = "head">
      <header>
        <h1>Word Card</h1>
      </header>
      <div className = "main">
        <h1>
          สิ่งของที่สวมใส่เพื่อบดบังแดด
        </h1>
        <div>
          <WordCard value = {"HAT"}/>
        </div>
        <h2>
          ป้องกันอันตรายอันเกิดจากการสัมผัสกับพื้นผิวต่างๆ หรือการเจ็บเท้าจากการเดินหรือ การวิ่ง
        </h2>
        <div>
          <WordCard value = {"SHOES"}/>
        </div>
      </div>
        
      <button className = "nemgame" onClick = {newGame}>
        New
      </button>
      
    </div>

    
    
  );
   
}

export default App;
