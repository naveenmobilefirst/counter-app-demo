import React, { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter</h1>
        <div>
          <button onClick={decrement}>-</button>
          <span style={{ margin: '0 12px' }}>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;