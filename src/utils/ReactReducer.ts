const CHANGE_STATE = 'CHANGE_STATE';

type stateType = { type: string; key?: string; payload: any; }

const changeAction = (payload: any, key: any) => ({
    type: CHANGE_STATE,
    key,
    payload,
});

export function stateReducer(state: any, {type, payload, key}: stateType) {
    switch (type) {
        case CHANGE_STATE:
            const newState = key ? {[key]: payload} : payload;
            return {
                ...state,
                ...newState,
            };
        default:
            return state;
    }
}

export const handleReducerChange = (dispatch: (arg0: stateType) => any) => (payload: any, key?: any) => {
    return dispatch(changeAction(payload, key));
};
