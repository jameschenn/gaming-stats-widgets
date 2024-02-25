import React from 'react';
import HeadshotSlider from './widgets/HeadshotSlider';
import HeadshotBar from './widgets/HeadshotBar';
import HeadshotStats from './widgets/HeadshotStats';
import './App.css';

const App: React.FC = () => {

  return (
    <div>
      <div className='div-seperator'>
        <HeadshotBar />
      </div>
      <div className='div-seperator'>
        <HeadshotSlider />
      </div>
      <div className='div-seperator'>
        <HeadshotStats />
      </div>
    </div>
    )
}

export default App;