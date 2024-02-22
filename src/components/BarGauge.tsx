import React, { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import './styles/BarGauge.css';

interface BarGaugeProps {
    value: { percentage: number };
}

const BarGauge: React.FC<BarGaugeProps> = ({ value }) => {

    const snap = useSnapshot(value);
    const [filledBlocks, setFilledBlocks] = useState(0);

    useEffect(() => {
        const calculateFilledBlocks = (percentage: number) => {

            /*
            Top Card Block Fill Logic:

            The top card displays a series of blocks that represent a range from 0.0 to 0.75.
            There are 14 blocks in total. The filling of these blocks should correlate proportionally to the slider's value, mapped to the 0.0 - 0.75 range.
            The mapping of the slider value to the block fill should follow this logic:
            A slider value of 0 should result in 0 filled blocks.
            A slider value greater or equal to 0.75 (75-100 on the slider) should fill all 14 blocks.
            Candidates should implement the logic to calculate the number of filled blocks based on the slider's position, ensuring that the fill state is visually represented in the top card.
            
            */

            const mappedPercentage = Math.min(Math.floor(percentage / 75 * 14));
            return Math.round(mappedPercentage);
        };
        const newFilledBlocks = calculateFilledBlocks(snap.percentage);
        setFilledBlocks(newFilledBlocks)
    }, [snap.percentage])

    return (
        <div className='bar-gauge-container'>
            <div className='bar-gauge-blocks'>
                {[...Array(14)].map((_, index) => (
                    <div
                    key={index}
                    className={`block ${index < filledBlocks ? 'filled' : ''}`}
                    />
                ))}
            </div>
         </div>
    );
}

export default BarGauge;