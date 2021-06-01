import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AddExpensesComponent } from './components/expenses/add-expenses/add-expenses.component';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { ListExpensesComponent } from './components/expenses/list-expenses/list-expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    AddExpensesComponent,
    AddBudgetComponent,
    ListExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
