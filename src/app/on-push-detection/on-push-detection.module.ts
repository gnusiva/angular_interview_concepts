import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnPushDetectionRoutingModule } from './on-push-detection-routing.module';
import { TestComponent } from './test/test.component';
import { OnPushDetectionComponent } from './on-push-detection.component';


@NgModule({
  declarations: [OnPushDetectionComponent, TestComponent],
  imports: [
    CommonModule,
    OnPushDetectionRoutingModule
  ]
})
export class OnPushDetectionModule { }
