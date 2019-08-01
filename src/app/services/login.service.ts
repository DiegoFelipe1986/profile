import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
  }

  logIn(){
    let headers = new HttpHeaders().set('Content-Type','application/json');

    let body = {
      client_id: 2,
      client_secret : "l3wXmCHALVR9qyiPVlWuE33DDipPL1Ax7I3ItTOK"
    }
    
    return this.http.post(`https://muy-gt.serveo.net/api/v1/login-aplications`, {body} , {headers});
  }

}
