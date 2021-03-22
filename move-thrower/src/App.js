import React from 'react';
import './App.css';
import firebase from 'firebase';
import SignIn from './SignIn.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Move Thrower: The Pokemon Move Calculator</h2>
        <SignIn />
      </header>     
      
      <p> Welcome to Move Thrower: The Pokemon Move Calculator! </p>
      <p> *Dev Comment* Below is where we'll put the various elements that make up the calculator </p>
    </div>
  );
}

export default App;
