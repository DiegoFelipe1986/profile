import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CodeService {

  urlBase = environment.urlBase;
  mobile: string;
  code: string;
  codeValidation: string;
  phone: string;
  
  constructor(private http: HttpClient) { 
    
  }

  signIn(mobile: string){
   
    const auth = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      Authorization: auth
    });
    
    
    return this.http.get(`${this.urlBase}api/v1/users/generate/${mobile}/code`, {headers});
 
  }

  validate(codeValidation: string, phone: string){
  
   phone = phone.toUpperCase();
   console.log(codeValidation, phone);
    
    let options = {
      mobile: phone
    }
    return this.http.get(`${this.urlBase}api/v1/users/validate/${codeValidation}/code` )
  }

}
