import React from 'react';
import Card from '../components/Card';
import Slider from '../components/Slider';
import store from '../store';

const HeadshotSlider: React.FC = () => {
    
    return (
        <Card renderText={true}>
            <Slider value={store} />
        </Card>
    );
}

export default HeadshotSlider;