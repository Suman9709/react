import React, { useContext, useState } from 'react'
import Comp1 from './components/Comp1';
import { CounterContext } from './contexts/CounterContext';


function App() {
  const {count} = useContext(CounterContext)
  return (
    <div style={{ border: "2px solid black", margin: "5px", padding: "5px" }}>
      <h1>App : {count}</h1>
      <Comp1 />
    </div>
  )
}

export default App