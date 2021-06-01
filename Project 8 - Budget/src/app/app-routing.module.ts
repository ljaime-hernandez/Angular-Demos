import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { AddExpensesComponent } from './components/expenses/add-expenses/add-expenses.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ListExpensesComponent } from './components/expenses/list-expenses/list-expenses.component';

const routes: Routes = [
  {path: '', redirectTo: '/addBudget', pathMatch: 'full'},
  {path: 'addBudget', component: AddBudgetComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: '**',  redirectTo: '/addBudget', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
