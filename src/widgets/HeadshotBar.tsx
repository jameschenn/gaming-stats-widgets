import React from 'react';
import Card from '../components/Card';
import BarGauge from '../components/BarGauge';
import store from '../store';

const HeadshotBar: React.FC = () => {
    
    return (
        <Card renderText={true}>
            <BarGauge value={store} />
        </Card>
    );
}

export default HeadshotBar;