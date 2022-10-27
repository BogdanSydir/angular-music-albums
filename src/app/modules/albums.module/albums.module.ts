import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumComponent} from './components/album/album.component';
import {AlbumsRoutingModule} from "./albums-routing.module";
import {AlbumsService} from "./services/albums.service";
import {HeaderComponent} from "./components/header/header.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";
import {SearchComponent} from "./components/search/search.component";

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    HeaderComponent,
    FavoritesComponent,
    SearchComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AlbumsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AlbumsService,
  ]
})
export class AlbumsModule {
}
