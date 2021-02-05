import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public length = new Subject();

  constructor( public http: HttpClient) {
    /*
    // to receive data
    this.length.subscribe( (data)=> {

    })

    // to send data
    this.length.next(55);

    */
  }

  getBackendData(): Observable<any> {
    return this.http.get('assets/json/data.json');
  }

}
