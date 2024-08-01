import { Component, inject, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  @Input()
  movieList: Movies[] = [];
}
