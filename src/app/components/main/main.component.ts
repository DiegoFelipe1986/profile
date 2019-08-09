import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CodeService} from '../../services/code.service';
import {environment} from 'src/environments/environment';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  accessToken: string;
  mobile: string;
  access: boolean;
  errorServicio: boolean;
  mensajeError: string;
  urlBase = environment.urlBase;
  loading: boolean;
  constructor(public code :CodeService,  public router: Router, private http: HttpClient) { }

  ngOnInit() {

  }

  send(){
    this.loading = true;
    this.code.signIn(this.mobile).subscribe((data:any) =>{
      if(data.status = 201){
        this.router.navigate(['code']);
      }
    }, (errorServicio) =>{
      this.loading = false;
      this.errorServicio = true;
      this.mensajeError = errorServicio.error.result.messages;
    } );
  }
    
}
