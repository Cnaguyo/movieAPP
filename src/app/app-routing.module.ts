import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { VideoComponent } from './Video/video.component';



const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/add', component: ShowMovieComponent },
  { path: 'play videos', component: VideoComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
