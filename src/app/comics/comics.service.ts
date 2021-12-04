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
    this.host = `${environment.host}`;
  }

  getCurrentComic(): Observable<any>{
    return this.http.get<any>( `/info.0.json`);
  }

  getComicByNumber(num: number): Observable<any> | null {

    if( !!num ){
      return this.http.get<any>( `/${num}/info.0.json`);
    }
    return null;
  }
}
