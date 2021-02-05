import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {

  currentPage: string = 'dashboard';

  constructor() { }

  ngOnInit(): void {
  }

}
