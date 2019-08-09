import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase = environment.urlBase;

  constructor(private http: HttpClient) {
    
  }

  logIn(){
    let headers = new HttpHeaders().set('Content-Type','application/json');

    let body = {
      client_id: environment.client_id,
      client_secret : environment.client_secret
    }
    
    return this.http.post(`${this.urlBase}api/v1/login-aplications`, body , {headers});
  }

}
