import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
  signal,
} from '@angular/core';
import { Movies } from '../movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from '../list-view/list-view.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, ListViewComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchQuery = signal<string>('');
  // @Input()
  // movies: Movies[] = [];
  movies = input<Movies[]>([]);
  filteredMovies = computed(() => {
    const sq = this.searchQuery();
    return this.movies$().filter((movie) => {
      movie.title.includes(sq);
    });
  });
  moviesService = inject(MoviesService);
  protected movies$ = this.moviesService.items;

  ngOnInit() {
    this.moviesService.getAllMovies();
  }
  searchUpdated(searchText: string) {
    this.searchQuery.set(searchText);
  }
}
