import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  {path: '', component: ListEmployeeComponent},
  {path: 'add', component: AddEditEmployeeComponent},
  {path: 'edit/:id', component: AddEditEmployeeComponent},
  {path: '**', component: ListEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
