import { Component, inject, Input, input, signal, Signal } from '@angular/core';
import { MovieDetails } from '../movie-details.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { CostPipe } from '../pipes/cost.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule, CostPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  movie = input.required<MovieDetails>();
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
