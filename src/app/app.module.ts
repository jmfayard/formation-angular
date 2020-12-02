import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompooentComponent } from './first-compooent/first-compooent.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompooentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
