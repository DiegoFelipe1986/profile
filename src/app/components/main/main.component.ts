import { Component, OnInit } from '@angular/core';
import {CodeService} from '../../services/code.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  mobile: string;

  constructor(public code :CodeService) { }

  ngOnInit() {
  }

  send(){
    
      this.code.signIn(this.mobile).subscribe( (data: any) => {
        
        console.log(data);
        
      });
  }
    
}
