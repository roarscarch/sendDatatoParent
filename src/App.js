import React from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>React Parent-Child Communication</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
