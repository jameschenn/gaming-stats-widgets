import React from 'react';
import { motion } from 'framer-motion';
import './styles/StatisticsBar.css';

interface StatisticsAnimationProps {
    value: number;
}

interface StatisticsProp {
    data: any,
}

const StatisticsAnimation: React.FC<StatisticsAnimationProps> = ({ value }) => {
    
    const width = (value / 1000) * 97.5;
    const yellowLineWidth = width - 15.5;

    return (
    <>
    <motion.div 
        className='statistics-data'
        style={{width: `${width}%`}}
        initial={{ opacity: 0, scaleX: 0, transformOrigin: 'left' }}
        animate={{ opacity: 1, scaleX: 1 }} 
        transition={{ duration: 2, delay: 0.25, type: 'spring', stiffness: 30 }}
        />
        <motion.div 
            className='yellow-line'
            style={{ left: `${yellowLineWidth}%` }}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        />
    </>
    );
};

const StatisticsBars: React.FC<StatisticsProp> = ({ data }) => {

  return (
    <div className='statistics-outer-container'>
      {data.map((bar:any, index:number) => (
            <div className='statistics-inner-container' key={index}>
                <div className='statistics-header'>
                    <p>{bar.stat}</p>
                    <p>{bar.value}</p>
                </div>
                <div className='statistics-bar'>
                    <div className='unfilled-statistics' />
                    <StatisticsAnimation value={bar.value} />
                </div>
            </div>
            
        ))}
    </div>
  );
};

export default StatisticsBars;
