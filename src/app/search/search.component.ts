import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Movies } from '../movies.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from '../list-view/list-view.component';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';
import { MovieDetails } from '../movie-details.interface';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, ListViewComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  moviesService = inject(MoviesService);
  movies$: Observable<Movies[]> = new Observable<Movies[]>();

  ngOnInit() {
    this.movies$ = this.moviesService.allMovies$;
  }
  titleSearchUpdated(searchText: string) {
    this.moviesService.titleSearchQuery.next(searchText);
  }
  releaseSearchUpdate(searchText: string) {
    this.moviesService.releaseSearchQuery.next(searchText);
  }
}
