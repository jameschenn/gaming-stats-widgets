import React from 'react';
import HeadshotSlider from './widgets/HeadshotSlider';
import HeadshotBar from './widgets/HeadshotBar';
import HeadshotStats from './widgets/HeadshotStats';
import './App.css';

const App: React.FC = () => {

  return (
    <div>
      <div>
        <HeadshotBar />
      </div>
      <div>
        <HeadshotSlider />
      </div>
      <div>
        <HeadshotStats />
      </div>
    </div>
    )
}

export default App;