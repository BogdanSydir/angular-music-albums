import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITags} from "../../../interfaces";
import {urls} from "../../../constants/urls";
import {token} from "../../../constants/token";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ITags> {
    const params = new HttpParams()
      .set('method', 'chart.gettoptags')
      .append('limit', 6)
      .append('api_key', token )
      .append('format', 'json')
    return this.httpClient.get<ITags>(urls.main, {params})
  }
}
