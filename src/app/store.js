import {createStore, combineReducers} from 'redux'
import StateEvent from '../action/StateEvent';

const appReducer = combineReducers({
    taskReducer: StateEvent
});

const store = createStore(
    appReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store