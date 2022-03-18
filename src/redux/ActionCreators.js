import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../data/staffBaseUrl'

export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
})

export const postStaff =  (name, doB, startDate, department, salaryScale, annualLeave, overTime) => (dispatch) => {
    const newStaff = {
        name: name,
        doB: doB,
        startDate: startDate,
        department: department,
        salaryScale: salaryScale,
        annualLeave: annualLeave,
        overTime: overTime
    }
    newStaff.doB = new Date().toISOString();
    newStaff.startDate = new Date().toISOString();
    newStaff.image = '/assets/images/alberto.png';
    return fetch(baseUrl + 'staffs',{
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error
        }
    }, error => {
        var errmess = new Error(error.message)
        throw errmess
    })
    .then(response => response.json())
    .then(response => dispatch(addStaffs(response)))
    .catch(error => {console.log('Post Staff', error.message)
            alert('Your staff could not be posted\nError: ' + error.message) })
}

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

export const fetchSalarys = () => (dispatch) => {
    dispatch(salarysLoading(true));
    return fetch(baseUrl + 'staffsSalary')
        .then(response => response.json())
        .then(salarys => dispatch(addSalarys(salarys)))
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFF_LOADING
})

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
})

export const salarysLoading = () => ({
    type: ActionTypes.SALARYS_LOADING
})

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errmess
})

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
})

export const salarysFailed = (errmess) => ({
    type: ActionTypes.SALARYS_FAILED,
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

export const addSalarys = (salarys) => ({
    type: ActionTypes.ADD_SALARYS,
    payload: salarys
})