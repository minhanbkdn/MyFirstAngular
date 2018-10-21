import {Injectable} from '@angular/core';
import {Hero} from '../entity/hero';
import {listHero} from '../data/heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(): Observable<Hero[]> {
    this.messageService.getMessage('Tải tất cả dữ liệu');
    return of(listHero);
  }

  getHeroById (id: number): Observable<Hero> {
    this.messageService.getMessage(`Đã tải dữ liệu của hero số ${id}`);
    return of(listHero.find((hero) => {
      return hero.id === id;
    }));
  }

  getHeroByIdForEach (id: number): Hero {
    for (let i = 0; i < listHero.length; i++) {
      if (listHero[i].id === id) {
        return listHero[i];
      }
    }
  }

  constructor(private messageService: MessageService) {
  }
}
