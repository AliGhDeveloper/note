import * as actions from 'store/actions';

export const initialValue = { auth: {}, notify: {}, notes: [] };

export default function Reducer(state, action) {
    switch(action.type) {
        case actions.NOTIFY :
            return {...state, notify : action.payload};
        case actions.ADD_NOTES :
            return {...state, notes : action.payload};
        default:
            return state
    }
}