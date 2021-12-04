import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  host: string;

  constructor(protected http: HttpClient) {
    this.host = `${environment.proxy}`;
  }

  getCurrentComic(): Observable<any>{
    const options = {headers: {'Target-URL':'https://xkcd.com'}};
    return this.http.get<any>( `${this.host}/info.0.json`, options);
  }

  getComicByNumber(num: number): Observable<any> | null {

    if( !!num ){
      const options = {headers: {'Target-URL':'https://xkcd.com'}};

      return this.http.get<any>( `${this.host}/${num}/info.0.json`, options);
    }
    return null;
  }
}
