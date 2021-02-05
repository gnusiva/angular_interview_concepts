import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing.module';
import { NormalComponent } from './normal.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyexamComponent } from './myexam/myexam.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [NormalComponent, HeaderComponent, LeftnavComponent, DashboardComponent, MyexamComponent],
  providers: [ ApiService ],
  imports: [
    CommonModule,
    NormalRoutingModule,
    HttpClientModule
  ]
})
export class NormalModule { }
