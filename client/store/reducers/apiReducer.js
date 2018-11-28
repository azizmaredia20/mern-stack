import { fromJS } from 'immutable';

export const API_LOADING = '';
export const API_LOADED = '';
export const API_FAILED = '';

export const apiLoading = ({ apiName, promise }) => ({
    type: `${apiName}_API_LOADING`,
    promise,
});

export const apiLoaded = ({ apiName, data }) => ({
    type: `${apiName}_API_LOADED`,
    data,
});

export const apiFailed = ({ apiName, error }) => ({
    type: `${apiName}_API_FAILED`,
    error,
});

const initialState = fromJS({
    promise: false,
    data: null,
    error: null,
})

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case API_LOADING:
            return state.merge({
                promise: action.promise,
                data: null,
                error: null
            });

        case API_LOADING:
            return state.merge({
                promise: false,
                data: action.data,
                error: null
            });

        case API_LOADING:
            return state.merge({
                promise: false,
                data: null,
                error: action.error,
            });
        
        default:
            return state;
    }
};