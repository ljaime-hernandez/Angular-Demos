import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private error$ = new Subject<string>();
  private searchText$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  setError(message: string) {
    this.error$.next(message);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  sendSearchText(text: string){
    this.searchText$.next(text);
  }

  getSearchText(): Observable<string> {
    return this.searchText$.asObservable();
  }

  getImages(text: string, imagesPerPage: number, actualImage: number): Observable<any> {
    const KEY = '21506129-41527189ee964ddd8da4e75a5';
    const URL = 'https://pixabay.com/api/?key=' + KEY + '&q=' + text + '&per_page=' + imagesPerPage + '&page=' + actualImage;
    return this.http.get(URL);
  }
}
