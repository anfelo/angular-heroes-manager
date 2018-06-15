import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { AppState } from '../models/app-state';
import * as heroActions from '../store/actions/hero.actions'; 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  isValidName: boolean = true;
  isValidHeight: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const nickname = this.route.snapshot.paramMap.get('nickname').toLowerCase();
    this.hero$ = this.store.select(state => state.heroes).pipe(
      map(heroes => heroes.filter(hero => hero._nickname.toLowerCase() === nickname)[0]),
      tap(heroes => {
        if(!heroes){
          this.goBack();
        }
      })
    );
  }

  saveHero(name: any, height: any, picture:any, nickname:any): void {
    if(!this.isValidForm(name, height)) return;
    const hero: Hero = {
      _name: name,
      _height: height,
      _picture: picture,
      _nickname: nickname,
    };

    this.store.dispatch(new heroActions.UpdateHeroAction(hero));
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  isValidForm(name:any, height:any): boolean {
    let validForm = true;
    if(!name.trim()) {
      this.isValidName = false;
      validForm = false;
    } else {
      this.isValidName = true;
    }

    if(isNaN(height) || height.trim() === '' || height.trim() === '0') {
      this.isValidHeight = false;
      validForm = false;
    } else {
      this.isValidHeight = true;
    }
    return validForm;
  }

}
