import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShowMovieComponent } from './show-movie/show-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [AppComponent, ShowMovieComponent, MovieListComponent, VideoComponent],
  imports: [BrowserModule, FormsModule,HttpClientModule ,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
