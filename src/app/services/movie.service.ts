import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
* Movie service that keeps track of a list of movies
*/
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private readonly http: HttpClient) {}
  //array for movies
  // private readonly items: Movie[] = [];

  //addmovie method
  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:8080/api/movies', movie);
  }


  //getmovie method
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8080/api/movies');
  }

  }


