
const {createStore} = require('redux')

// steps:

//initial state
const initialState = {
    count: 0,
}

//actions action - action creator
//increment 
//decrement
//reset
//increaseByAmount
//action


//Action Creators
const incrementAction = () =>{
    return {
        type: 'INCREMENT',
    }
};

const decrementAction = () =>{
    return {
        type: 'DECREMENT',
    }
}

const resetAction = () =>{
    return {
        type: 'RESET',
    }
}

const increaseByAmountAction = (anyAmount) =>{
    return {
        type: 'INCREASE_BY_AMOUNT',
        payload: anyAmount
    }
}

//reducer
const counterReducer = (state=initialState, action) =>{
    if(action.type === 'INCREMENT'){
        return {
            count: state.count + 1
        }
    }

    if(action.type === 'DECREMENT'){
        return {
            count: state.count - 1
        }
    }

    if(action.type === 'RESET'){
        return {
            count: state.count = 0
        }
    }

    if(action.type === 'INCREASE_BY_AMOUNT'){
        return {
            count: state.count + action.payload
        }
    }
}

//store

const store = createStore(counterReducer)


//get State

//subscribe to store
store.subscribe(() => {
    const stateData = store.getState();
    console.log(stateData)
})


//dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(increaseByAmountAction(5));
store.dispatch(increaseByAmountAction(15));


