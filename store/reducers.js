import * as actions from 'store/actions';

export const initialValue = { auth: {}, notify: {} };

export default function Reducer(state, action) {
    switch(action.type) {
        case actions.NOTIFY :
            return {...state, notify : action.payload};
        default:
            return state
    }
}