import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from  'redux-thunk';
import itemReducer from './reducers/itemReducer';

const initialState = {};

const middleware = [thunk];

let store = createStore(combineReducers({item : itemReducer}), initialState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;