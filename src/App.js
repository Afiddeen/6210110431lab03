import React from 'react';
import './App.css';
import WordCard from './WordCard';


function App() {
  const word =["SHOES","SCARF","SOCKS","HAT"] ;

  const newGame = () => {
    window.location.reload()
  }

  return (
    <div className = "head">
      <header>
        <h1>WORD CARD</h1>
      </header>

      <div className = "main">
        <h2>
          เป็นสิ่งที่ใส่สวมใส่บนศีรษะเพื่อจุดประสงค์ต่าง ๆ
        </h2>
        <div>
          <WordCard value = {"HAT"}/>
        </div>
        <h2>
          ป้องกันอันตรายอันเกิดจากการสัมผัสกับพื้นผิวต่างๆ บริเวณเท้า
        </h2>
        <div>
          <WordCard value = {"SHOES"}/>
        </div>
        <h2>
          เครื่องประดับที่ป้องกันความหนาวบริเวณคอ
        </h2>
        <div>
          <WordCard value = {"SCARF"}/>
        </div>
        <h2>
          อุปกรณ์เสื้อผ้าสำหรับสวมใส่ที่เท้า
        </h2>
        <div>
          <WordCard value = {"SOCKS"}/>
        </div>
        <h2>
          เป็นสิ่งที่มนุษย์สวมใส่เพื่อปกป้องร่างกาย
        </h2>
        <div>
          <WordCard value = {"CLOTHES"}/>
        </div>
      </div>
        
      <button className = "nemgame" onClick = {newGame}>
        New
      </button>
      
    </div>

  );
   
}

export default App;
