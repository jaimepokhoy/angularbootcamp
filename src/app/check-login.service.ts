import { Injectable } from '@angular/core';
import { Accounts } from './login/mock-accounts';
import { Account } from './login/account';

@Injectable()
export class CheckLoginService {

  constructor() { }
  checkLogin(acc: Account): boolean{
    var res = Accounts.filter(account=> (acc.account === account.account && acc.password === account.password));
    if(res.length > 0){
      return true;
    }
    else {
      return false;
    }
  }

}
