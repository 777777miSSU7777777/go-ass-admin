import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './browserhistory';

export interface AppState {
    router: History;
}

const rootReducer = combineReducers({
    router: connectRouter(history),
});

export default rootReducer;
