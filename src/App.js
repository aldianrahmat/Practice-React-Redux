import React from 'react';
import './App.css';
import CounterComponent from './CounterComponent';
import UserComponent from './UserComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterComponent />
        <UserComponent />
      </header>
    </div>
  );
}

export default App;
