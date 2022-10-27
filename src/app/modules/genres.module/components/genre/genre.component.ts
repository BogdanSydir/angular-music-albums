import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

import {ITag} from "../../../../interfaces";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {

  @Input()
  genre: ITag;

  constructor(private router: Router) {
  }

  goToAlbums(genre: string) {
    this.router.navigate([`albums`, genre])
    // console.log(name), genre as querry
  }
}
