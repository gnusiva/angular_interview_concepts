import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-immutable-child',
  templateUrl: './immutable-child.component.html',
  styleUrls: ['./immutable-child.component.scss']
})
export class ImmutableChildComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  setChildData(): void {
    this.data = { chichi: 'child child child....'};
  }

}
