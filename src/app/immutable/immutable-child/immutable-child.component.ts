import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-immutable-child',
  templateUrl: './immutable-child.component.html',
  styleUrls: ['./immutable-child.component.scss']
})
export class ImmutableChildComponent implements OnInit, OnChanges, OnDestroy, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() data: any;

  constructor() {
    console.log('constructor...')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  setChildData(): void {
    this.data = { chichi: 'child child child....'};
  }

}
