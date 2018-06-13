import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { OrdinalPipe } from './extras/ordinal.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    OrdinalPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }