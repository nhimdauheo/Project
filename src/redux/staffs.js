import {STAFFS} from '../data/staffs'
import * as ActionTypes from './ActionTypes';

export const Staffs = (state = STAFFS, action) => {
    switch (action.type){
        case ActionTypes.ADD_STAFF:
            var staff = action.payload;
            staff.id = state.length;
            staff.doB = new Date().toISOString();
            staff.startDate = new Date().toISOString(); 
            console.log("Staff: ", staff);
            return state.concat(staff)
        default: 
            return state
    }
}