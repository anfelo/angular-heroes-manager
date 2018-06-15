import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '../models/hero';
import { AppState } from '../models/app-state';
import * as heroActions from '../store/actions/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.heroes$ = this.store.select(state => state.heroes);
    this.heroes$.subscribe(heroes => {
      if(!heroes.length){
        this.getHeroes();
      }
    })
  }

  getHeroes(): void {
    this.store.dispatch(new heroActions.LoadHeroesAction());
  }

}