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
        
    return (
        <Card renderText={false}>
            <div className='circle-gauge-container'>
                <div style={{ width: 150, height: 150 }}>
                    <CircleGauge value={store} />
                </div>
                <div>
                    <p className='header-category'>Headshot</p>
                    <p className='header-stats'><span>{`${Math.floor(snap.percentage)}%`}</span> higher than your last {store.fakeBlocksData.length} average</p>
                </div>
            </div>
            <div>
                <AverageBars data={store.fakeBlocksData} />
            </div>
            <div>
                <StatisticsBars data={store.fakeBarsData} />
            </div>
        </Card>
    );
}

export default HeadshotStats;