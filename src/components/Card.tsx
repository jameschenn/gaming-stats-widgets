import React from 'react';
import { useSnapshot } from 'valtio';
import store from '../store';
import './styles/Card.css';

interface CardProps {
    children: React.ReactNode;
    renderText: boolean;
}

const Card: React.FC<CardProps> = ({children, renderText = false}) => {

    const snap = useSnapshot(store);

    return (
        <div className='widget-card'>
            {renderText && (
                <>
                <div className='card-container'>
                    <div className='percentage-div'>
                        <p className='percentage'>{snap.percentage}%</p>
                        <p>Headshot</p>
                    </div>
                    <div className='weapon-div'>
                        <p>AK-47</p>
                    </div>
                </div>
                </>
            )}
            {children}
        </div>
    )
}
    
    
export default Card;
