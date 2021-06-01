import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() selectedParameters = new EventEmitter<any>();

  selectedCategory = 'health';
  selectedCountry = 'br';

  categories: any[] = [
    {value: 'general', name: 'General'},
    {value: 'business', name: 'Business'},
    {value: 'entertainment', name: 'Entertainment'},
    {value: 'health', name: 'Health'},
    {value: 'science', name: 'Science'},
    {value: 'sports', name: 'Sports'},
    {value: 'technology', name: 'Technology'}
  ];

  countries: any[] = [
    {value: 'ar', name: 'Argentina'},
    {value: 'br', name: 'Brasil'},
    {value: 'fr', name: 'France'},
    {value: 'hu', name: 'Hungary'},
    {value: 'mx', name: 'Mexico'},
    {value: 'gb', name: 'Great Britain'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  searchNews() {
    const PARAMETERS = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }

    this.selectedParameters.emit(PARAMETERS);
  }
}
