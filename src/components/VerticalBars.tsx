import React from 'react';
import { motion } from 'framer-motion';
import './styles/VericalBars.css'

interface BarsAnimationProps {
    value: number;
    maxValue: number;
}

interface BarsProp {
    data: any,
}

const BarsAnimation: React.FC<BarsAnimationProps> = ({ value, maxValue }) => {
  
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

const VerticalBars: React.FC<BarsProp> = ({ data }) => {

  const maxValue = Math.max(...data.map((bar:any) => bar.value));

  return (
    <div className='bars-container'>
      {/* (0,0) to (100,1) */}
      <svg className='dashed-line-svg' viewBox='0 0 100 1'> 
        <line className='dashed-line' x1='0' y1='0' x2='100' y2='0' />
      </svg>
      {data.map((bar:any, index:number) => (
        <BarsAnimation key={index} value={bar.value} maxValue={maxValue} />
        ))}
    </div>
  );
};

export default VerticalBars;
