import React, { useEffect, useState } from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';

function App() {
  const [var1, setVar1] = useState(true);
  alert("app rendered");

  useEffect(() => {
    alert("app mounted");

    return () => {
      alert("app unmounted")
    }
  }, [])

  useEffect(() => {
    alert("var1 updated " + var1);

    return () => {
      alert("var1 removed " + var1)
    }
  }, [var1])

  return (
    <div>
      {var1 ? <Comp1 /> : <Comp2 />}
      <br/>
      <button onClick={() => setVar1(!var1)}>Toggle</button>
    </div>
  )
}

export default App