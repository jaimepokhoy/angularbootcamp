import { Component, OnInit } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message='';
  login: Account={account:'',password:''}; 
  constructor() {}

  ngOnInit() {
     
  }

}
