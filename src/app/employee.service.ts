import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employeeNames : string[]=['emp1','ash','aksh'];

  constructor() { }

  getEmployee():string[]{
    return this.employeeNames;
  }
}
