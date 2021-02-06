import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'normal', loadChildren: () => import('./observable/normal/normal.module').then( m => m.NormalModule) },
  { path: 'onpush', loadChildren: () => import('./on-push-detection/on-push-detection.module').then( m => m.OnPushDetectionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
