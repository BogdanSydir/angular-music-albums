import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IAlbum} from "../../../../interfaces";
import {AlbumsService} from "../../services/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
  genre: string;
  albums: IAlbum[];
  search: string = '';


  constructor(private albumsService: AlbumsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({genre}) => this.genre = genre);
    this.albumsService.getAll(this.genre).subscribe(value => this.albums = value.albums.album)
  }

  catch(search: string) {
    this.search = search
  }
}
