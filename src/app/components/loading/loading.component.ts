import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  access: boolean;
  accessToken : string;
  errorServicio: boolean;
  mensajeError: string;

  constructor(public login :LoginService, public router: Router) { }

  ngOnInit() {
    
    this.getToken();
  }

  getToken(){
    
    this.login.logIn().subscribe( (data: any) => {
      console.log(data);
      if (data.code == 200){
        this.access = true;
        this.accessToken = data.result.token.toString();
        localStorage.setItem('access_token', this.accessToken);
        
      } else {
        this.access = false;
      }
          
      this.router.navigate(['main']);
    
    }, (errorServicio) =>{
      this.errorServicio = true;
      this.mensajeError = errorServicio.error.result.message;
    });
  }

}
