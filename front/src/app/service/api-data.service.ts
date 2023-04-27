import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private apiHost = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getData(url: string): Observable<any> {
    return this.http.get(this.apiHost + 'url');
  }

  public postData(url: string, options: any): Observable<any> {
    return this.http.post(this.apiHost + 'url', options);
  }

}
