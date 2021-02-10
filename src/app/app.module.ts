import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImmutableComponent } from './immutable/immutable.component';
import { ImmutableChildComponent } from './immutable/immutable-child/immutable-child.component';
import { DirectivComponent } from './directiv/directiv.component';
import { CardEffectDirective } from './card-effect.directive';
import { FormControlComponent } from './form-control/form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ImmutableComponent,
    ImmutableChildComponent,
    DirectivComponent,
    CardEffectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
