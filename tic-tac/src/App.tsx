import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/Block';
import { stat } from 'fs';

function App() {
  const [state, setState] = useState(Array(9).fill(null))
  const [currentTurn, setCurrentTurn] = useState('X');

  const HandleBlockClick = (index: number) => {
    const StateCopy = Array.from(state);
    StateCopy[index] = currentTurn;
    setCurrentTurn(currentTurn === 'X' ? '0' : 'X');
    setState(StateCopy);
  }

  return (
    <div className='board'>
      <div className='row'>
        <Block onClick={() => HandleBlockClick(0)} value={state[0]} />
        <Block onClick={() => HandleBlockClick(1)} value={state[1]} />
        <Block onClick={() => HandleBlockClick(2)} value={state[2]} />
      </div>

      <div className='row'>
        <Block onClick={() => HandleBlockClick(3)} value={state[3]} />
        <Block onClick={() => HandleBlockClick(4)} value={state[4]} />
        <Block onClick={() => HandleBlockClick(5)} value={state[5]} />
      </div>
      <div className='row'>
        <Block onClick={() => HandleBlockClick(6)} value={state[6]} />
        <Block onClick={() => HandleBlockClick(7)} value={state[7]} />
        <Block onClick={() => HandleBlockClick(8)} value={state[8]} />
      </div>

    </div>
  );
}

export default App;
