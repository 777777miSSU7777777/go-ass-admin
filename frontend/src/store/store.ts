import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';
import history from './browserhistory';

export default () => {
    const middlewares = [routerMiddleware(history), thunkMiddleware];
    const middlewareEnchancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, middlewareEnchancer);

    return store;
}