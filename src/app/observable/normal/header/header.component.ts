import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count = 0;

  constructor(public api: ApiService) {
    this.api.length.subscribe( (data: any) => {
      this.count = data;
    });
  }

  ngOnInit(): void {
  }


}
