import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  listEmployee: Employee[] = [
    {fullName: 'Lucas Arnau', phone: 412341234, email: 'lucasarnau@gmail.com', contractDate: new Date(), civilStatus: 'Single', gender: 'Male'},
    {fullName: 'Mike Wasawski', phone: 456745674, email: 'mikewasawski@gmail.com', contractDate: new Date(), civilStatus: 'Single', gender: 'Male'},
    {fullName: 'Paula Rodriguez', phone: 412341234, email: 'paularodriguez@gmail.com', contractDate: new Date(), civilStatus: 'Single', gender: 'Female'},
    {fullName: 'Daniel Lopez', phone: 789078907, email: 'daniellopez@gmail.com', contractDate: new Date(), civilStatus: 'Single', gender: 'Male'},
    {fullName: 'Patricia Pat', phone: 567856785, email: 'patriciapat@gmail.com', contractDate: new Date(), civilStatus: 'Single', gender: 'Female'},
    {fullName: 'Aida Beltran', phone: 346534653, email: 'aidabeltran@gmail.com', contractDate: new Date(), civilStatus: 'Single', gender: 'Female'},
    {fullName: 'Andres Paez', phone: 412341234, email: 'andrespaez@gmail.com', contractDate: new Date(), civilStatus: 'Single', gender: 'Male'}
  ]

  constructor() { }

  getEmployees() {
   return this.listEmployee.slice();
  }

  deleteEmployee(index: number) {
    this.listEmployee.splice(index, 1);
  }

  addEmployee(employee: Employee) {
    this.listEmployee.unshift(employee);
  }

  getEmployee(index: any) {
    return this.listEmployee[index];
  }

  editEmployee(employee: Employee, idEmployee: number) {
    this.listEmployee[idEmployee].fullName = employee.fullName;
    this.listEmployee[idEmployee].email = employee.email;
    this.listEmployee[idEmployee].phone = employee.phone;
    this.listEmployee[idEmployee].contractDate = employee.contractDate;
    this.listEmployee[idEmployee].civilStatus = employee.civilStatus;
    this.listEmployee[idEmployee].gender = employee.gender;
  }
}
