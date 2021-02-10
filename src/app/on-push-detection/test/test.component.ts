import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TestComponent implements OnInit {

  @Input() arr: any[] = [0.5, 0.6, 0.7];
  @Input() num = 0;
  @Input() str: any;
  @Input() dd: any;

  constructor() { }

  ngOnInit(): void {
  }

}
