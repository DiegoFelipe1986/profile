import { Component, OnInit } from '@angular/core';
import {CodeService} from '../../services/code.service';
import {environment} from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  codeValidation = '';
  phone = '';

  constructor(public codeSer : CodeService) { }

  ngOnInit() {
  }

  validateCode(codeValidation: string, phone:string){
    //console.log(this.codeValidation, this.phone);
    this.codeSer.validate(this.codeValidation, this.phone).subscribe((data:any) =>{
      console.log(data);
    });
  }

}
