import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { OrdinalPipe } from './extras/ordinal.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    OrdinalPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }