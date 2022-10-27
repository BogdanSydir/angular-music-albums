import {Component, Input, OnInit} from '@angular/core';

import {IAlbum} from "../../../../interfaces";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input()
  album: IAlbum;

  liked: boolean;

  ngOnInit(): void {
    this.checkFavorites()
  }

  checkFavorites(): void {
    const allFavorites = localStorage.getItem('favorite');

    if (allFavorites) {

      const parsedFavorites: IAlbum[] = JSON.parse(allFavorites);

      for (const singleFavorite of parsedFavorites) {
        if (singleFavorite.name === this.album.name) {
          this.liked = true;
        }
      }
    }
  }

  toggleFavorite(): void {
    const allFavorites = localStorage.getItem('favorite');

    if (allFavorites) {

      const parsedFavorites: IAlbum[] = JSON.parse(allFavorites);

      let isLiked: boolean = false;
      for (let i = 0; i < parsedFavorites.length; i++) {
        // console.log(parsedFavorites[i]);
        if (parsedFavorites[i].name === this.album.name) {
          isLiked = true
          parsedFavorites.splice(i, 1)
        }
      }
      if (isLiked) {
        localStorage.setItem('favorite', JSON.stringify(parsedFavorites))
        this.liked = false
      } else {
        parsedFavorites.push(this.album)
        localStorage.setItem('favorite', JSON.stringify(parsedFavorites))
        this.liked = true
      }
    } else {
      const favorite = [this.album]
      localStorage.setItem('favorite', JSON.stringify(favorite))
      this.liked = true
    }
  }
}
