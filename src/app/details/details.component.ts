import { Component, inject, Input, input, signal, Signal } from '@angular/core';
import { MovieDetails } from '../movie-details.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  movie = input.required<MovieDetails>();
}
