import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css'],
})
export class ShowMovieComponent implements OnInit, OnDestroy {
  public movieTitle: string;
  public movieYear: number;
  public movieRating: number;

  public subscription: Subscription;

  constructor(private readonly movieService: MovieService) {}

  public addMovie(): void {
    const newMovie: Movie = {
      rating: this.movieRating,
      title: this.movieTitle,
      year: this.movieYear,
    };
    this.subscription = this.movieService
      .addMovie(newMovie)
      .subscribe((movie) => {
        alert(`We added a movie with id ${movie.id}!`);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
