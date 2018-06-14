import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { HeroService } from '../../hero.service';
import * as heroActions from '../actions/hero.actions';


@Injectable()
export class HeroEffects {

  @Effect()
  loadHeroes$ = this.actions$.ofType(heroActions.LOAD_HEROES)
    .pipe(
      switchMap(() => {
        return this.heroService.getHeroes().pipe(
          map(heroes => new heroActions.LoadHeroesSuccessAction(heroes))
        );
      })
    );

  constructor(
    private heroService: HeroService,
    private actions$: Actions
  ) { }
}
