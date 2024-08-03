import { Component, inject, input, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { CommonModule } from '@angular/common';
import { DurationMinutePipe } from '../pipes/duration-minute.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, DurationMinutePipe, RouterModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  movie = input.required<Movies>();
}
