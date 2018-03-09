import { Component, OnInit } from '@angular/core';

import { Account } from './account';
import { CheckLoginService } from '../check-login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CheckLoginService]
})
export class LoginComponent implements OnInit {
  message='';
  login: Account={account:'',password:''}; 
  constructor(private check:CheckLoginService) {}

  ngOnInit() {
     
  }
  tryLogin(){
    if(this.check.checkLogin(this.login)){
      this.message='Login looks good';
    }
    else {
      this.message='Account not found';
    }
  }

}
