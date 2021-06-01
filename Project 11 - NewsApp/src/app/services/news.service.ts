import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http: HttpClient) { }

  getNews(parameters: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parameters.country + '&category=' + parameters.category + 
                '&apiKey=e79f7938e74048078cc75aff45efae7e';

    return this.http.get(URL);
  }
}
