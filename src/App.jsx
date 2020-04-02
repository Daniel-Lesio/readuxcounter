import React from 'react';
import './App.scss';
import {useSelector , useDispatch} from 'react-redux'

function App() {
  const counter = useSelector( state=>state.counter )
  const dispatch = useDispatch();
  const addToStore = ()=>{
    dispatch({ type:"INCREMENT" })
  }
  const removeFromStore = ()=>{
    dispatch({ type : "DECREMENT" })
  }
  return (
    <div className="App">
      <h1> Counter {counter}</h1>
      <button onClick={addToStore} > addToStore </button>
      <button onClick={removeFromStore} > removeFromStore </button>
    </div>
  );
};
export default App;