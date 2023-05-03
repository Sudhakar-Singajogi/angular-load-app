import {createReducer, on} from "@ngrx/store";
import {employeeDetails, storeEmployee} from "../actions/employee.actions";
import {EmployeeLoginService} from "../services/employeeLogin.service"

interface employeeInter {
    "id": number,
    "name": string,
    "role": string,
    "password":string
}

const initState:employeeInter = {
    "id": 0,
    "name": "",
    "role": "",
    "password":""

}
const _employeeReducer = createReducer(
        initState, 
        on(employeeDetails, (state:any) => { return initState} ),
        on(storeEmployee, (state:any, action:any) => { 
            console.log('payload is:', action.payload)
            const payload =action.payload;
            return {
                ...initState,
                id:payload.id,
                name:payload.name,
                role:payload.role,
                password:payload.password
            }
        })

    )

export function employeeReducer(state:any, action:any) {
    const employeeLoginService = new EmployeeLoginService();
    employeeLoginService.empDetails.subscribe((data) => console.log('emp details are:', data));
    return _employeeReducer(state, action)
}

