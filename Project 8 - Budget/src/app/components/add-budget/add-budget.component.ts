import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {

  quantity: number;
  wrongQuantity: boolean;

  constructor(private _budgetService: BudgetService, private router: Router) {
    this.quantity = 0;
    this.wrongQuantity = false;
   }

  ngOnInit(): void {
  }

  add(): void {
    if(this.quantity > 0){
      this.wrongQuantity = false;
      this._budgetService.budget = this.quantity;
      this._budgetService.remaining = this.quantity;
      this.router.navigate(['/expenses']);
    } else {
      this.wrongQuantity = true;
    }
  }
}
