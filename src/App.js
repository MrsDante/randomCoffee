import './App.css';
import React, { useState } from 'react';
import giveMeSomeCoffee from './randomCoffeeGenerator';

function App() {
  const [advice, setAdvice] = useState('');

  const handleClick = () => {
    setAdvice(giveMeSomeCoffee());
  }

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">
          {advice}
        </h1>
        <button onClick={handleClick} className="button">
          <span>Выбери за меня кофе!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
