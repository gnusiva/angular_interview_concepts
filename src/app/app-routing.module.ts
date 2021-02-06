import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGaurdGuard } from './login-gaurd.guard';

const routes: Routes = [
  { path: 'normal', loadChildren: () => import('./observable/normal/normal.module').then( m => m.NormalModule) },
  { path: 'onpush',
    loadChildren: () => import('./on-push-detection/on-push-detection.module').then( m => m.OnPushDetectionModule),
    canActivate: [ LoginGaurdGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
