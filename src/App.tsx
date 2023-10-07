import React from 'react';
import './App.css';
import { Visualizer, ConfigBar } from './components'
function App() {
  return (
    <>
      <div className="App">
        <ConfigBar />
        <Visualizer />
      </div>

      <div className='size-warning'>
        <h1>
          Please use a bigger screen. This website is not compatible with phones.
        </h1>
      </div>

    </>

  );
}

export default App;
