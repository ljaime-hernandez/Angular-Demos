import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bmi: number;
  result: string;
  interpret: string;

  constructor(private router: ActivatedRoute) {  
    this.result = '';
    this.interpret = '';
    this.bmi = +router.snapshot.paramMap.get('value')!;
    console.log(this.bmi);
  }

  ngOnInit(): void {
    this.getResult();

  }

  getResult(): void {
    if (this.bmi >= 25){
      this.result = 'Weight Excess'
      this.interpret = 'You have excessive weight, try working out!'
    }
    else if (this.bmi >= 18.5){
      this.result = 'Normal Weight'
      this.interpret = 'You have a healthy weight, good job!'
    }
    else{
      this.result = 'Low Weight'
      this.interpret = 'You have a low weight, got to eat some more food!'
    }
  }

}
