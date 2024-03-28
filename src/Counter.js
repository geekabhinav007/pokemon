import React, { useState } from 'react';
import './Counter.css'
import Pokemon from './Pokemon';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <button className="Output-button" >Pokemon Number: {count}</button>
      </p>
      <button onClick={() => setCount(count + 1)} className="counter-button">Increment</button>
      <button onClick={() => setCount(count - 1)} className="counter-button" >Decrement</button>
      <Pokemon num={count} />
    </div>

  );
}

export default Counter;
