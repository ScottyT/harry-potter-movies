import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { MovieDetailsService } from './services/movie-details.service';

export const movieRouteResolver = (route: ActivatedRouteSnapshot) => {
  const movieId = route.paramMap.get('movieId');
  if (!movieId) {
    return of(undefined);
  }
  return inject(MovieDetailsService).getMovieDetails(movieId);
};
