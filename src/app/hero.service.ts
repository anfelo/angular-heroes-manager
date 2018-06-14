import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Hero } from './models/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://udem.herokuapp.com/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

}