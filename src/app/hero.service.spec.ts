import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('HeroService', () => {
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroService);
  });

  describe('get', () => {

    it('should call get with the correct URL', () => {

      service.getHeroes().subscribe();

      const req = httpTestingController.expectOne('https://udem.herokuapp.com/heroes');
      req.flush([
        {
          _name: "Anthony Stark",
          _height: 6.1,
          _picture: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
          _nickname: "Iron Man"
        },
        {
          _name: "Peter Parker",
          _height: 5.1,
          _picture: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg",
          _nickname: "Spider-Man"
        },
      ]);
      httpTestingController.verify();
    });
  });
});