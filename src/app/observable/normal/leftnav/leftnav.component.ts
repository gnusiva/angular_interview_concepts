import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  @Output() menuSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onclick( event: string): void {
    this.menuSelected.emit(event);
  }
}
