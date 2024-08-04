import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MoviesService } from '../services/movies.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let mockMovieService: MoviesService;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
      providers: [{ provide: MoviesService }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    mockMovieService = TestBed.inject(MoviesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
