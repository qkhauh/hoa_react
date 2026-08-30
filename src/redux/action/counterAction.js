// Action Types
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

// Action Creators
export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
});
