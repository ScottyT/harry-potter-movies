import { Component, inject, input, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  movie = input.required<Movies>();
}
