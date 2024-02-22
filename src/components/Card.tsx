import React from 'react';
import './styles/Card.css';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {

    return (
        <div>
            {children}
        </div>
    )
}
    
    
export default Card;