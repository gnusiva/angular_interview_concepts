import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  @Input() arr: any[] = [];
  @Input() num = 0;
  @Input() str: any;

  constructor() { }

  ngOnInit(): void {
  }

}
