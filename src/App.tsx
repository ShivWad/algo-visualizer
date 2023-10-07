import React from 'react';
import './App.css';
import { Visualizer, ConfigBar } from './components'
function App() {
  return (
    <div className="App">
      <ConfigBar />
      <Visualizer />
    </div>
  );
}

export default App;
