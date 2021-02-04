import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immutable',
  templateUrl: './immutable.component.html',
  styleUrls: ['./immutable.component.scss']
})
export class ImmutableComponent implements OnInit {

  data1: any;

  constructor() { }

  ngOnInit(): void {
  }

  setdata1(): void {
    this.data1 = { sss: 'oooooooooooo' };
  }

  setdata2(): void {
    this.data1 = { hehe: 'qqqqqqqqqq'};
  }

  getdata1(): void {
    console.log(this.data1)
  }

}
