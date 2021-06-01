import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  age = 28;
  weight = 80;
  height = 70;
  gender = 'Male';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeHeight(event: any){
    this.height = event.target.value;
  }

  male(): void{
    this.gender = 'Male';
  }

  female(): void {
    this.gender = 'Female';
  }

  calculateBMI(): void {
    const BMI = this.weight / Math.pow(this.height/100, 2);
    this.router.navigate(['/result', BMI.toFixed(1)]); 
  }
}
