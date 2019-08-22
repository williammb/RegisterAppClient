import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appActions';

export interface AppReducerState {
    login: boolean;
    user?: string;
}

const initalState: AppReducerState = {
    login: false,
    user: 'GUEST'
};

export function appReducer(state = initalState, action): AppReducerState {
    switch (action.type) {
        case ACTION_LOGOUT:
            return {
                ...state,
                login: false,
                user: null
            };
        case ACTION_LOGIN:
            return {
                ...state,
                login: true,
                user: action.payload
            };
    }
    return state;
}
