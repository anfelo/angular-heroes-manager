import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { OrdinalPipe } from './extras/ordinal.pipe';
import { heroReducer } from './store/reducers/hero.reducers';
import { HeroEffects } from './store/effects/hero.effects';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({heroes: heroReducer}),
    EffectsModule.forRoot([HeroEffects]),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    OrdinalPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }