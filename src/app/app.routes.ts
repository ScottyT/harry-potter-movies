import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { movieRouteResolver } from './movie-route.resolver';

export const routes: Routes = [
  {
    path: 'details/:movieId',
    loadComponent: () =>
      import('./details/details.component').then((c) => c.DetailsComponent),
    resolve: { movie: movieRouteResolver },
  },
  { path: '', component: SearchComponent },
];
