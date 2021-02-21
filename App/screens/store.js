import {createStore, combineReducers} from 'redux';
import {sessReducer} from '../reducers/reducer';

// const rootReducer = combineReducers({
//   sessionReducer : reducer
// })

const configureStore = () => createStore(sessReducer);

export default configureStore;