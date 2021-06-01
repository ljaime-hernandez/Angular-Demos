import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = 'https://api-ssl.bitly.com/v4/shorten';
  token = '29e778045b25023eba7ac3ff85641e9152f9a83f';

  constructor(private http: HttpClient) {}

  getUrlShort(nameUrl: string): Observable<any> {
    
  //  const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + this.token});
    const body = {
      long_url: nameUrl,
    }

    return this.http.post(this.url, body);
  }
}
