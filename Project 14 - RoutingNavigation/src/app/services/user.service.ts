import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://gorest.co.in/public-api/users';
  token = '45fa4124531828715246cd08d79fff9e0f8249f87f61563efce6931010a882b9';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getPics(): Observable<any>{
    return this.http.get<any>('https://picsum.photos/v2/list');
  }

  getUser(id: number): Observable<any>{
    return this.http.get<any>(this.url + '?id=' + id + '?access-token=' + this.token);
  }
}
