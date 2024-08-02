import { Injectable, Signal, signal } from '@angular/core';
import { Movies } from './movies';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  private items$: BehaviorSubject<Movies[]> = new BehaviorSubject<Movies[]>([]);
  items = this.items$.asObservable();
  getAllMovies() {
    return this.http.get<Movies[]>('/movies').pipe(
      tap((data) => {
        this.items$.next(data);
      })
    );
  }
}
