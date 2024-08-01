import { Injectable, signal } from '@angular/core';
import { Movies } from './movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // private items$ = signal<Movies[]>([]);
  // constructor(private http: HttpClient) {}
  // getAllMovies() {
  //   this.http.get('http://localhost:4002/movies').subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
