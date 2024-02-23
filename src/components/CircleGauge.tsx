import React from 'react';
import { useSnapshot } from 'valtio';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './styles/CircleGauge.css';

interface CircleGaugeProps {
    value: { percentage: number };
}

const CircleGauge: React.FC<CircleGaugeProps> = ({ value }) => {
    
    const snap = useSnapshot(value);
    
    return (
        <CircularProgressbar
            className='circle-gauge'
            value={snap.percentage}
            text={`${Math.floor(snap.percentage)}%`}
            circleRatio={0.75}
            strokeWidth={6}
            styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: 'butt',
                pathColor:'var(--clr-green)',
                trailColor: '#35383e',
                textColor:'var(--clr-green)',
                pathTransitionDuration: 0.35,
                textSize:'28px',                 
            })}
        />        
    );
};

export default CircleGauge;
