import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  input,
  OnInit,
  Output,
  Signal,
  signal,
} from '@angular/core';
import { Movies } from '../movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from '../list-view/list-view.component';
import { MoviesService } from '../movies.service';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, ListViewComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchQuery = new BehaviorSubject<string>('');
  moviesService = inject(MoviesService);
  //protected movies$ = this.moviesService.items;
  movies$ = new Observable<Movies[]>();

  ngOnInit() {
    this.movies$ = combineLatest([
      this.searchQuery,
      this.moviesService.getAllMovies(),
    ]).pipe(
      map(([search, data]) => data.filter((x) => x.title.includes(search)))
    );
  }
  searchUpdated(searchText: string) {
    this.searchQuery.next(searchText);
  }
}
