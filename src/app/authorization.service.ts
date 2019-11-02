import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
baseUrl = 'http://api.github.com/search/repositories?q=';
constructor( private  _http : HttpClient) {  }
postWithBody(relativeUrl: string): Observable <any> {
  // console.log(body);
  return this._http.get<any>(this.baseUrl  + relativeUrl);
}
}
