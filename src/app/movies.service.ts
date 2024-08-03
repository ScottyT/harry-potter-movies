import { Injectable, Signal, signal } from '@angular/core';
import { Movies } from './movies';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  Subject,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  titleSearchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  releaseSearchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  allMovies$: Observable<Movies[]> = this.getFilteredMovies();

  getAllMovies() {
    return this.http.get<Movies[]>('/movies');
  }

  private getFilteredMovies() {
    return combineLatest([
      this.titleSearchQuery,
      this.releaseSearchQuery,
      this.getAllMovies(),
    ]).pipe(
      map(([titleSearch, releaseSearch, data]) =>
        data.filter(
          (x) =>
            x.title.includes(titleSearch) &&
            x.release_date.substring(0, 4).includes(releaseSearch)
        )
      )
    );
  }
}
