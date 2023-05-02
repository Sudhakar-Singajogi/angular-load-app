import {createAction, props} from "@ngrx/store"

interface employeeInter {
    "name": string,
    "role": string,
    "password":string
}


export const employeeDetails = createAction("getEmployeeDetails");
export const storeEmployee = createAction(
    "[add employee to store] storeEmployee",
    props<{payload:employeeInter}>()
    );
