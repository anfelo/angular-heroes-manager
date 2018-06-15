import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { AppState } from '../models/app-state';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

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
      map(heroes => heroes.filter(hero => hero._nickname.toLowerCase() === nickname)[0])
    );
  }

  // save(): void {
  //   this.heroService.updateHero(this.hero)
  //     .subscribe(() => this.goBack());
  // }

  goBack() {
    this.location.back();
  }

}
