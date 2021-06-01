import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nameUrl: string;
  urlShort: string;
  textError: string;
  urlProcessed: boolean;
  loading: boolean;
  showError: boolean;


  constructor(private _shortUrlService: ShortUrlService) {
    this.nameUrl = '';
    this.urlShort = '';
    this.textError = '';
    this.urlProcessed = false;
    this.loading = false;
    this.showError = false
   }

  ngOnInit(): void {
  }

  processUrl() {

    if(this.nameUrl == ''){
      this.error('Please type an Url');
      return;
    }

    this.urlProcessed = false;
    this.loading = true;

    setTimeout(() => {
      this.obtainUrlShort();
    },2000);
  }

  obtainUrlShort(){
    this._shortUrlService.getUrlShort(this.nameUrl).subscribe( data => {
    this.loading = false;
    this.urlProcessed = true;
    this.urlShort = data.link;
    }, error => {
      if(error.error.description === 'The value provided is invalid.'){
        this.error('the Url inserted is incorrect');
      }
      this.loading = false;
    });
  }

  error(value: string){
    this.showError = true;
    this.textError = value;
    setTimeout(() => {
      this.showError = false;
    }, 4000)
  }
}
