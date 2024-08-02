import { Component, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { http, HttpResponse, getResponse } from 'msw';
import { Movies } from './movies';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, ListViewComponent, HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  moviesService = inject(MoviesService);
  title = 'harry-potter-movies';
  // protected movies: Signal<Movies[]>;

  constructor() {
    //this.moviesService.getAllMovies();
  }
}
