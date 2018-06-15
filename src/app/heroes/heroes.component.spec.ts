import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'

import { StoreModule } from '@ngrx/store';

import { HeroesComponent } from './heroes.component';
import { OrdinalPipe } from './../ordinal/ordinal.pipe';

import { heroReducer } from '../store/reducers/hero.reducers';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeroesComponent,
        OrdinalPipe
      ],
      imports: [ 
        RouterTestingModule,
        StoreModule.forRoot({heroes: heroReducer}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});