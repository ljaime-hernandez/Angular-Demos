import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News';

  listNews: any[] = [];
  loading: boolean;

  constructor(private _newsService: NewsService){
    this.loading = false;
  }

  searchNews(parameters: any){
    this.loading = true;
    this.listNews = [];

    setTimeout(() => {
      this._newsService.getNews(parameters).subscribe(data =>{
        this.loading = false;
        this.listNews = data.articles;
      }, error =>{
        console.log(error);
        this.loading = false;
    });
    }, 2000);
  }   
}
