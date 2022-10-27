import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ITag} from "../../../../interfaces";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: ITag[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genres}) => {
      this.genres = genres.tags.tag;
    })
  }

}
