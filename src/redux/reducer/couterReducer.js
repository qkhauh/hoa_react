import { INCREASE_COUNTER, DECREASE_COUNTER } from '../action/counterAction';

const initialState = {
    count: 0,
};

const couterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, count: state.count + 1 };
        case DECREASE_COUNTER:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default couterReducer;
