import {Injectable} from '@angular/core';
import {Hero} from '../entity/hero';
import {listHero} from '../data/heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {urlTemplate} from '../data/urlTemplate';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(): Observable<Hero[]> {
    // @ts-ignore
    return this.http.get<Hero[]>(`${urlTemplate}heroes/`)
      .pipe(
        tap(_ => this.log('Tải tất cả dữ liệu')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHeroById(id: number): Observable<Hero> {
    // @ts-ignore
    return this.http.get<Hero>(`${urlTemplate}heroes/${id}`)
      .pipe(
        tap(_ => this.log(`Đã tải dữ liệu của hero số ${id}`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHeroByIdForEach(id: number): Hero {
    for (let i = 0; i < listHero.length; i++) {
      if (listHero[i].id === id) {
        return listHero[i];
      }
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.getMessage(`HeroService: ${message}`);
  }

  constructor(private messageService: MessageService, private http: HttpClient) {
  }
}
