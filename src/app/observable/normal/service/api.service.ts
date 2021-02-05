import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public length = 0;

  constructor( public http: HttpClient) { }

  getBackendData(): Observable<any> {
    return this.http.get('assets/json/data.json');
  }

}
