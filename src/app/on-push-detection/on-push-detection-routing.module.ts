import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnPushDetectionComponent } from './on-push-detection.component';

const routes: Routes = [
  { path: '', component: OnPushDetectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnPushDetectionRoutingModule { }
