import { proxy } from 'valtio';

const store = proxy({
    
    percentage: parseFloat(localStorage.getItem('percentage') || '0') || 0, // If NaN set it to default 0
    fakeBlocksData: [
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
    ],
    fakeBarsData: [
        {'stat': 'Statistics', 'value' : 999 },
        {'stat': 'Statistics', 'value' : 999 },
        {'stat': 'Statistics', 'value' : 999 },
    ]
});

export const setSliderPercentage = (value: number) => {
    
    store.percentage = value;
    localStorage.setItem('percentage', value.toString());
}

export default store;