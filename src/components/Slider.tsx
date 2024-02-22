import React from 'react';
import { useSnapshot } from 'valtio';
import { setSliderPercentage } from '../store';

interface SliderProps {
    value: { percentage: number };
}

const Slider: React.FC<SliderProps> = ({ value }) => {

    const snap = useSnapshot(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPercentage(parseFloat(e.target.value));
    }

    console.log(snap.percentage)
    return (
        <input
            type='range'
            min='0'
            max='100'
            step='0.1'
            value={snap.percentage}
            onChange={handleChange}
        />
    );
}

export default Slider;