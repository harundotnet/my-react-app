import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello.js';
import Welcome from './Components/Welcome.js';
import Arrow from './Components/Arrow.js';
import State from './Components/State.js';
import SetState from './Components/SetState.js';
import Condition1 from './Components/Condition1.js';
import VariableElement from './Components/VariableElement.js';
import Refresh from './Components/Refresh';
import ReactDOM1 from './Components/ReactDOM1';
import ReactDOM2 from './Components/ReactDOM2';
import Signup from './Components/Signup';
import BasicForm from './Components/BasicForm';


function App() {
  return (
    <div className="App">
      {/* Multiline comments and better approch
          <Hello name="Ayan" age="2"></Hello>
          <Welcome name="Class 1"></Welcome>
          <Arrow></Arrow>
      */}
      {// I am comments but not better approch
      // Like previous one
      }
{/*
 <State></State>
      <hr></hr>
      <SetState></SetState>
      <hr></hr>
      <Condition1></Condition1>
      <hr></hr>
      <VariableElement></VariableElement>
      <hr></hr>
      <Refresh></Refresh>
      <hr></hr>
       <ReactDOM1></ReactDOM1>
      <br></br>
      <ReactDOM2></ReactDOM2>
      <Signup/>
*/}
     
     <BasicForm></BasicForm>
    </div>
  );
}

export default App;
