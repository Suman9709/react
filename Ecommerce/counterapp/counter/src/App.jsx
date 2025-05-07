import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increament ,decreament } from './redux/slices/counterSlice';

function App() {
  const count = useSelector(function (state) {
    return state.counter.value;
  });

  const dispatcher = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatcher(increament(5))}>Inc</button>
      <button onClick={()=>dispatcher(decreament(4))}>Dec</button>
    </>
  )
}

export default App