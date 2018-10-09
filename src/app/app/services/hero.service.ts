import {Injectable} from '@angular/core';
import {Hero} from '../entity/hero';
import {listHero} from '../data/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(): Hero[] {
    return listHero;
  }

  getHeroById(id: number): Hero {
    return listHero.find(function (hero) {
      return hero.id === id;
    });
  }

  getHeroByIdForEach(id: number): Hero {
    for (let i = 0; i < listHero.length; i++) {
      if (listHero[i].id === id) {
        return listHero[i];
      }
    }
  }

  constructor() {
  }
}
