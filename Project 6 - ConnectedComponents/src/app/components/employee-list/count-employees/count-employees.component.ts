import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-employees',
  templateUrl: './count-employees.component.html',
  styleUrls: ['./count-employees.component.css']
})
export class CountEmployeesComponent implements OnInit {

  @Input() all: number;
  @Input() male: number;
  @Input() female: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSelected = 'all';

  constructor() {
    this.all = 0;
    this.male = 0;
    this.female = 0;
   }

  ngOnInit(): void {
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSelected);
  }
}
