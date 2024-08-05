import { Injectable, Signal, signal } from '@angular/core';
import { Movies } from '../movies.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<Movies[]>('/movies');
  }
}
