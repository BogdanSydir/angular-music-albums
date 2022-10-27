import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {token} from "../../../constants/token";
import {urls} from "../../../constants/urls";
import {IResponse} from "../../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(genre: string): Observable<IResponse> {
    const params = new HttpParams()
      .set('method', 'tag.gettopalbums')
      .append('api_key', token )
      .append('format', 'json')
      .append('tag', genre)
    return this.httpClient.get<IResponse>(urls.main, {params})
  }
}
