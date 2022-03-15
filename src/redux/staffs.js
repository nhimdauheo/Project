import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
    isLoading: true,
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
            staff.id = state.length;
            staff.doB = new Date().toISOString();
            staff.startDate = new Date().toISOString();
            staff.image = '/assets/images/alberto.png';
            console.log("Staff: ", staff);
            return  {...state, staffs : state.staffs.concat(staff)}
        default:
            return state
    }
}