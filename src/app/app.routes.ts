import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  { path: '', component: SearchComponent },
];
