import React from 'react';
import { useSnapshot } from 'valtio';
import Card from '../components/Card';
import CircleGauge from '../components/CircleGauge';
import AverageBars from '../components/AverageBars';
import StatisticsBars from '../components/StatisticsBar';
import store from '../store';
import './styles/HeadshotStats.css'

const HeadshotStats: React.FC = () => {

    const snap = useSnapshot(store);

    const fakeBlocksData = [
        {'value': 6},
        {'value': 4.5},
        {'value': 5},
        {'value': 3},
        {'value': 6},
        {'value': 7},
        {'value': 6.3},
        {'value': 5},
        {'value': 6},
        {'value': 4.8},
        {'value': 5},
        {'value': 3},
        {'value': 6},
        {'value': 5.7},
        {'value': 10},
    ]

    const fakeBarsData = [
        {'stat': 'Statistics', 'value' : 999 },
        {'stat': 'Statistics', 'value' : 500 },
        {'stat': 'Statistics', 'value' : 209 },
    ]
        
    return (
        <Card renderText={false}>
            <div className='circle-gauge-container'>
                <div style={{ width: 155, height: 160 }}>
                    <CircleGauge value={store} />
                </div>
                <div>
                    <p className='header-category'>Headshot</p>
                    <p className='header-stats'><span>{`${Math.floor(snap.percentage)}%`}</span> higher than your last 15 average</p>
                </div>
            </div>
            <div>
                <AverageBars data={fakeBlocksData} />
            </div>
            <div>
                <StatisticsBars data={fakeBarsData} />
            </div>
        </Card>
    );
}

export default HeadshotStats;