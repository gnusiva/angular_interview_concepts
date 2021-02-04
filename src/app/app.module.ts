import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImmutableComponent } from './immutable/immutable.component';
import { ImmutableChildComponent } from './immutable/immutable-child/immutable-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ImmutableComponent,
    ImmutableChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
