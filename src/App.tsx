import React from 'react';
import HeadshotSlider from './widgets/HeadshotSlider';
import HeadshotBar from './widgets/HeadshotBar';
import './App.css';

const App: React.FC = () => {

  return (
    <div>
      <HeadshotBar />
      <HeadshotSlider />
    </div>
    )
}

export default App;