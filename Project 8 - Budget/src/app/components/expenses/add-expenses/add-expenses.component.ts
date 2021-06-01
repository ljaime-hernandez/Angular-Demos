import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  nameExpense: string;
  quantity: number;
  incorrectForm: boolean;
  incorrectText: string;

  constructor(private _budgetService: BudgetService) {
    this.nameExpense = '';
    this.quantity = 0;
    this.incorrectForm = false;
    this.incorrectText = 'Expense name or quantity are incorrect'
   }

  ngOnInit(): void {
  }

  addExpense(): void{

    if(this.quantity > this._budgetService.remaining){
      this.incorrectForm = true;
      this.incorrectText = 'Quantity added is greater than the remaining budget';
      return;
    }

    if (this.nameExpense == '' || this.quantity <= 0){
      this.incorrectForm = true;
    } else {

      const EXPENSE = {
        name: this.nameExpense,
        quantity: this.quantity
      }

      this._budgetService.addExpense(EXPENSE);

      this.incorrectForm = false;
      this.nameExpense = '';
      this.quantity = 0;
    }
  }
}
