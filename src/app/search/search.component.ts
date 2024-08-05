import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Movies } from '../movies.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from '../list-view/list-view.component';
import { MoviesService } from '../services/movies.service';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
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
  titleSearchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  releaseSearchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  movies$: Observable<Movies[]> = new Observable<Movies[]>();

  ngOnInit() {
    this.movies$ = combineLatest([
      this.titleSearchQuery,
      this.releaseSearchQuery,
      this.moviesService.getAllMovies(),
    ]).pipe(
      map(([titleSearch, releaseSearch, data]) =>
        data.filter(
          (x) =>
            x.title.toLowerCase().includes(titleSearch) &&
            x.release_date.substring(0, 4).includes(releaseSearch)
        )
      )
    );
  }
  titleSearchUpdated(searchText: string) {
    this.titleSearchQuery.next(searchText);
  }
  releaseSearchUpdate(searchText: string) {
    this.releaseSearchQuery.next(searchText);
  }
}
