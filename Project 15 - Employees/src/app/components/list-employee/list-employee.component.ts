import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmMessageComponent } from '../shared/confirm-message/confirm-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit  {

  displayedColumns: string[] = ['fullName', 'email', 'phone', 'contractDate', 'gender', 'civilStatus', 'modify'];
  dataSource = new MatTableDataSource();
  listEmployee: Employee[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _employeeService: EmployeeService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadEmployees();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEmployees() {
    this.listEmployee =  this._employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.listEmployee);
  }

  deleteEmployee(index: number) {

    const dialogRef = this.dialog.open(ConfirmMessageComponent, {width: '250px', data: {message: 'Are you sure you want to delete the employee information?'}});

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'Accept'){
        this._employeeService.deleteEmployee(index);
        this.loadEmployees();
        this.snackBar.open('The employee was deleted successfully', '', {
          duration: 3000
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
}
