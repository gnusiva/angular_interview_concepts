import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-detection',
  templateUrl: './on-push-detection.component.html',
  styleUrls: ['./on-push-detection.component.scss']
})
export class OnPushDetectionComponent implements OnInit {

  arr: any[] = [];
  num = 6;
  str = { key1: '' };

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      this.onClick();
    }, 1000);
  }

  onClick(): void {
    // this.arr.push('oosssoo');
    this.num = Math.random();
    this.str = { key1: 'divi' + Math.random() };
  }

}
