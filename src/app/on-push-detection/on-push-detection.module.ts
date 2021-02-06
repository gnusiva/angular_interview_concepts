import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnPushDetectionRoutingModule } from './on-push-detection-routing.module';
import { TestComponent } from './test/test.component';
import { OnPushDetectionComponent } from './on-push-detection.component';
import { AddFivePipe } from './add-five.pipe';
import { MonthYearPipe } from './month-year.pipe';
import { ShowAbove5Pipe } from './show-above5.pipe';


@NgModule({
  declarations: [OnPushDetectionComponent, TestComponent, AddFivePipe, MonthYearPipe, ShowAbove5Pipe],
  imports: [
    CommonModule,
    OnPushDetectionRoutingModule
  ]
})
export class OnPushDetectionModule { }
