import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {ITags} from "../../../interfaces";
import {GenresService} from "./genres.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<ITags> {

  constructor(private genresService: GenresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITags> | Promise<ITags> | ITags {
    return this.genresService.getAll();
  }
}
