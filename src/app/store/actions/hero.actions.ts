import { Hero } from '../../models/hero';


export const LOAD_HEROES = 'LOAD_HEROES';
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';

export const UPDATE_HERO = 'UPDATE_HERO';

export class LoadHeroesAction {
  readonly type = LOAD_HEROES;
  constructor() { }
}

export class LoadHeroesSuccessAction {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public payload: Hero[]) { }
}

export class UpdateHeroAction {
  readonly type = UPDATE_HERO;
  constructor(public payload: Hero) { }
}

export type Action
  = LoadHeroesAction
  | LoadHeroesSuccessAction
  | UpdateHeroAction;
