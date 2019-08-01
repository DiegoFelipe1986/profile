import { Component, OnInit } from '@angular/core';
import {CodeService} from '../../services/code.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  mobile: string;

  constructor(public code :CodeService, public login :LoginService) { }

  ngOnInit() {
    let client_id = 2;
    let client_secret = 'l3wXmCHALVR9qyiPVlWuE33DDipPL1Ax7I3ItTOK';

    this.login.logIn().subscribe( (data: any) => {
        
      console.log(data);
      
    });
  }

  send(){
    
      this.code.signIn(this.mobile).subscribe( (data: any) => {
        
        console.log(data);
        
      });
  }
    
}
