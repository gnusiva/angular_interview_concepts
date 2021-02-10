import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'normal', loadChildren: () => import('./observable/normal/normal.module').then( m => m.NormalModule) },
  { path: 'formControl', loadChildren: () => import('./form-control/form-control.module').then( m => m.FormControlModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
