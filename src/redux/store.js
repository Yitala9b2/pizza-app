import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import filterReducer from './reducers/categoryReducer';


// eslint-disable-next-line no-underscore-dangle
const store = createStore(filterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;