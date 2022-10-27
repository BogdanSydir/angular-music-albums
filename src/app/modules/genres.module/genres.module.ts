import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {GenresComponent} from './components/genres/genres.component';
import {GenresRoutingModule} from "./genres-routing.module";
import {GenresResolver} from "./services/genres.resolver";
import {GenreComponent} from './components/genre/genre.component';
import {GenresService} from "./services/genres.service";


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GenresRoutingModule,
  ],
  providers: [
    GenresService,
    GenresResolver,
  ]
})
export class GenresModule {
}
