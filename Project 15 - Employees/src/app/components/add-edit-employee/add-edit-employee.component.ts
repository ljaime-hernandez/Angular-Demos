import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmployeeComponent implements OnInit {

  civilStatus: any[] = ['Single', 'Married', 'Legal Union', 'Divorced']
  myForm: FormGroup;
  idEmployee: any;
  action = 'Create';

  constructor( private fb: FormBuilder, 
               private _employeeService: EmployeeService, 
               private router: Router,
               private snackBar: MatSnackBar,
               private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      civilStat: ['', Validators.required],
      gender: ['', Validators.required],
      contractDate: ['', Validators.required]
    });
    const idParam = 'id'
    this.idEmployee = this.aRoute.snapshot.params[idParam];
   }

  ngOnInit(): void {
    if(this.idEmployee !== undefined) {
      this.action = 'Edit';
      this.editingEmployee();
    }
  }

  saveEmployee() {
    const employee: Employee = {
      fullName: this.myForm.get('fullName').value,
      email: this.myForm.get('email').value,
      phone: this.myForm.get('phone').value,
      civilStatus: this.myForm.get('civilStat').value,
      gender: this.myForm.get('gender').value,
      contractDate: this.myForm.get('contractDate').value,
    }

    if(this.idEmployee !== undefined) {
      this.editEmployee(employee);
    } else {
      this.addEmployee(employee);
    }
  }

  editingEmployee() {
    const employee: Employee = this._employeeService.getEmployee(this.idEmployee);
    console.log(employee);
    this.myForm.patchValue({
      fullName: employee.fullName,
      email: employee.email,
      gender: employee.gender,
      contractDate: employee.contractDate,
      civilStat: employee.civilStatus,
      phone: employee.phone,
    })
  }

  editEmployee(employee: Employee) {
    this._employeeService.editEmployee(employee, this.idEmployee);
    this.router.navigate(['/']);
    this.snackBar.open('The employee was updated successfully', '', {
      duration: 3000
    });
  }

  addEmployee(employee: Employee) {
    this._employeeService.addEmployee(employee);
    this.router.navigate(['/']);
    this.snackBar.open('The employee was registered successfully', '', {
      duration: 3000
    });
  }
}
