import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-myexam',
  templateUrl: './myexam.component.html',
  styleUrls: ['./myexam.component.scss']
})
export class MyexamComponent implements OnInit {

  arr = [];
  leng = 0;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getBackendData().subscribe( (data: any ) => {
      this.arr = data.key3;
      this.leng = this.arr.length;
      this.api.length.next( this.leng );
    });
  }

}
