import { CardDeckService } from './../cards/card-deck.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CardDeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
