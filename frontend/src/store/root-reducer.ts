import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './browserhistory';
import { AuthState } from './auth/reducer';
import AuthReducer from './auth/reducer';

export interface AppState {
    router: History;
    auth: AuthState;
}

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
});

export default rootReducer;
