import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  quantity = 0;
  current = 'USD';
  newCurrency = 'EURO';
  total = 0;

  coins: string[] = ['USD', 'EURO', 'POUND'];
  constructor() { }

  ngOnInit(): void {
  }

  convert(): void {

    switch(this.current){
      case 'USD': 
        if(this.newCurrency === 'USD'){
          this.total = this.quantity;
        }
        if(this.newCurrency === 'EURO'){
          this.total = this.quantity * 0.84;
        } 
        if(this.newCurrency === 'POUND'){
          this.total = this.quantity * 0.75;
        }
        break;
      case 'EURO':
        if(this.newCurrency === 'USD'){
          this.total = this.quantity * 1.20;
        }
        if(this.newCurrency === 'EURO'){
          this.total = this.quantity;
        } 
        if(this.newCurrency === 'POUND'){
          this.total = this.quantity * 0.9;
        }
        break;
      case 'POUND':
        if(this.newCurrency === 'USD'){
          this.total = this.quantity * 1.33;
        }
        if(this.newCurrency === 'EURO'){
          this.total = this.quantity * 1.11;
        } 
        if(this.newCurrency === 'POUND'){
          this.total = this.quantity;
        }
        break;
    }
  }
}
