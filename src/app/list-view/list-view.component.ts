import { Component, inject, input, Input } from '@angular/core';
import { Movies } from '../movies.interface';
import { CommonModule } from '@angular/common';
import { DurationMinutePipe } from '../pipes/duration-minute.pipe';
import { RouterModule } from '@angular/router';
import { CostPipe } from '../pipes/cost.pipe';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, DurationMinutePipe, RouterModule, CostPipe],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  movie = input.required<Movies>();
}
