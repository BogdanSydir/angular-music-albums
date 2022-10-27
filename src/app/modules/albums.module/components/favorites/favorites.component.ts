import {Component} from '@angular/core';

import {IAlbum} from "../../../../interfaces";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  getLikes(): number {
    const allFavorites = localStorage.getItem('favorite');
    if (allFavorites) {
      const parsedFavorites: IAlbum[] = JSON.parse(allFavorites);
      return parsedFavorites.length
    }
    return 0
  }
}
