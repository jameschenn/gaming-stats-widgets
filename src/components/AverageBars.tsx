import React from 'react';
import { motion } from 'framer-motion';
import './styles/AverageBars.css'

interface AverageAnimationProps {
    value: number;
    maxValue: number;
}

interface AverageProp {
    data: any,
}

const AverageAnimation: React.FC<AverageAnimationProps> = ({ value, maxValue }) => {
  
  const height = (value / maxValue) * 100;

  return (
    <motion.div 
      className='bar-data'
      style={{
        height: `${height}px`,
      }}
      initial={{ opacity: 0, scaleY: 0, transformOrigin: 'bottom' }}
      animate={{ opacity: 1, scaleY: 1 }} 
      transition={{ duration: 2, delay: 0.25, type: 'spring', stiffness: 60,}}
    />
  );
};

const AverageBars: React.FC<AverageProp> = ({ data }) => {

  const maxValue = Math.max(...data.map((bar:any) => bar.value));

  return (
    <div className='bars-container'>
      {/* (0,0) to (100,1) */}
      <svg className='dashed-line-svg' viewBox='0 0 100 1'> 
        <line className='dashed-line' x1='0' y1='0' x2='100' y2='0' />
      </svg>
      {data.map((bar:any, index:number) => (
        <AverageAnimation key={index} value={bar.value} maxValue={maxValue} />
        ))}
    </div>
  );
};

export default AverageBars;
