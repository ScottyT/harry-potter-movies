import { Injectable, Signal, signal } from '@angular/core';
import { Movies } from './movies';
import { HttpClient } from '@angular/common/http';
import { http } from 'msw';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private items$ = signal<Movies[]>([]);
  constructor(private http: HttpClient) {}
  getAllMovies(): Signal<Movies[]> {
    this.http.get<Movies[]>('/movies').subscribe((movies) => {
      this.items$.set(movies);
    });
    return this.items$.asReadonly();
  }
}
