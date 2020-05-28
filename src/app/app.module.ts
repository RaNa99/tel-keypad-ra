import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelkeygenComponent } from './telkeygen/telkeygen.component';

@NgModule({
  declarations: [
    AppComponent,
    TelkeygenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
