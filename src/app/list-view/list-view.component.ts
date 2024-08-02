import { Component, inject, input, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { CommonModule, DecimalPipe } from '@angular/common';
import { DurationMinutePipe } from '../pipes/duration-minute.pipe';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, DurationMinutePipe, DecimalPipe],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  movie = input.required<Movies>();
}
