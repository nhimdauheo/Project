import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
    errMess: null,
    staffs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS:
            return { ...state, isLoading: false, errMess: null, staffs: action.payload };

        case ActionTypes.STAFF_LOADING:
            return { ...state, isLoading: true, errMess: null, staffs: [] }

        case ActionTypes.STAFF_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, staffs: [] };

        case ActionTypes.ADD_STAFF:
            var staff = action.payload;
            return { ...state, staffs: state.staffs.concat(staff) }

        case ActionTypes.DELETE_STAFF:
            return {...state, staffs:state.staffs.filter((staff)=> staff.id !== action.payload )}

        default:
            return state
    }
}