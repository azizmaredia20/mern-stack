import { combineReducers } from 'redux';

import apiReducer, {
    apiLoading,
    apiLoaded,
    apiFailed,
} from './apiReducer';

export default combineReducers({
    api: apiReducer,
});