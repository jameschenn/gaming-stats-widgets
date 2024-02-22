import { proxy } from 'valtio';

const store = proxy({
    percentage: parseInt(localStorage.getItem('percentage') || '0') || 0, // If NaN set it to default 0
});

export const setSliderPercentage = (value: number) => {
    store.percentage = value;
    localStorage.setItem('percentage', value.toString());
}

export default store;