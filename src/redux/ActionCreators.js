import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../data/staffBaseUrl'

export const addStaff = ( name, doB, startDate, department, salaryScale, annualLeave, overTime) => ({
    type: ActionTypes.ADD_STAFF,
    payload: {
        name: name,
        doB: doB,
        startDate: startDate,
        department: department,
        salaryScale: salaryScale,
        annualLeave: annualLeave,
        overTime: overTime
    }
})

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));
    return fetch (baseUrl + 'staffs')
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
}

export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));
    return fetch(baseUrl + 'departments')
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFF_LOADING
})

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
})

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errmess
})

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
})

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
})