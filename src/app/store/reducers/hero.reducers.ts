import * as heroActions from './../actions/hero.actions';
import { Hero } from '../../models/hero';
import { AppState } from '../../models/app-state';


export function heroReducer(state: Hero[] = [], action: heroActions.Action) {
  switch (action.type) {
    case heroActions.LOAD_HEROES: {
      return state;
    }

    case heroActions.LOAD_HEROES_SUCCESS: {
      const heroes = action.payload;
      return heroes;
    }

    case heroActions.UPDATE_HERO: {
      return state.map(hero => {
        if(hero._nickname === action.payload._nickname) {
          return action.payload;
        }
        return hero;
      });
    }

    default : {
      return state;
    }
  }
}
