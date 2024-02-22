import React from 'react';
import { useSnapshot } from 'valtio';
import Card from '../components/Card';
import Slider from '../components/Slider';
import store from '../store';

const HeadshotSlider: React.FC = () => {

    const snap = useSnapshot(store);
    
    return (
        <Card>
            <div>
                <p>{snap.percentage}</p>
                <p>headshot</p>
            </div>
            <div>
                <p>ak-47</p>
            </div>
            <Slider value={store} />
        </Card>
    );
}

export default HeadshotSlider;