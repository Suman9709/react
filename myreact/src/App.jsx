import React, { useState } from 'react'
import Increament from './components/Increament';
import Decreament from './components/Decreament';

function App() {
  const [count, setCount] = useState(0);
  const [var1, setVar1] = useState(true);
  alert("app is rendered");

  const comp1 = <Increament count={count} setCount={setCount} />;
  const comp2 = <Decreament count={count} setCount={setCount} />;

  return (
    <>
      <h1>{count}</h1>
      {var1 ? comp1 : comp2}
      <button onClick={() => setVar1(!var1)}>Toggle</button>
    </>
  )
}

export default App