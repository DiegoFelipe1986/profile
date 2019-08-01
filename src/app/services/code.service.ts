import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private http: HttpClient) { 
    console.log('desde code');
  }

  signIn(mobile: string){
    
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post(`https://muydev.com/api/users/defaulttoken?id=9203`, {headers});

  }

}
