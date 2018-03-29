import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
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
  constructor(private check:CheckLoginService, private router:Router) {}

  ngOnInit() {
     
  }
  tryLogin(){
    if(this.check.checkLogin(this.login)){
      this.router.navigate(['/list']);
    }
    else {
      this.message='Account not found';
    }
  }

}
