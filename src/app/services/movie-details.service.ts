import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails } from '../movie-details.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private readonly http: HttpClient) {}

  getMovieDetails(id: string) {
    return this.http
      .get<MovieDetails>(`/movies/${id}`)
      .pipe(tap((data) => console.log(data)));
  }
}
