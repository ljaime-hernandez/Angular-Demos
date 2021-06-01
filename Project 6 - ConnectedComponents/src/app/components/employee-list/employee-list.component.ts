import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  listEmployee: Employee[] = [
    {id: 1, firstName: 'Juan', lastName: 'Perez', gender: 'male', salary: 100000},
    {id: 2, firstName: 'Maria', lastName: 'Ortega', gender: 'female', salary: 200000},
    {id: 3, firstName: 'Pedro', lastName: 'Rodriguez', gender: 'male', salary: 300000},
    {id: 4, firstName: 'David', lastName: 'Guzman', gender: 'female', salary: 400000},
    {id: 8, firstName: 'Sergio', lastName: 'Cabrejo', gender: 'male', salary: 550000},
    {id: 15, firstName: 'Daniel', lastName: 'Beltran', gender: 'male', salary: 550000},
    {id: 45, firstName: 'Martin', lastName: 'Gonzalez', gender: 'male', salary: 550000}
  ]

  radioButtonSelected = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  obtainTotal(): number{
    return this.listEmployee.length;
  }

  obtainMale(): number{
    return this.listEmployee.filter(list => list.gender === 'male').length;
  }

  obtainFemale(): number{
    return this.listEmployee.filter(list => list.gender === 'female').length;
  }

  employeeRadioChange(radioButtonSelect: string): void{
    this.radioButtonSelected = radioButtonSelect;
  }
}
