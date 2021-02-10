import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-detection',
  templateUrl: './on-push-detection.component.html',
  styleUrls: ['./on-push-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class OnPushDetectionComponent implements OnInit {

  arr: any[] = [0.5, 0.6, 0.7];
  num = 6;
  str = { key1: '' };
  dd = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      this.onClick();
    }, 1000);
  }

  onClick(): void {
    this.arr.push(Math.random());
    // this.arr = [...this.arr];
    this.num = Math.random();
    this.str = { key1: 'divi' + Math.random() };
  }

}
