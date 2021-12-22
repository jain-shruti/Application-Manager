import { AccountService } from './../accounts.service';
import { Component, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  @ViewChild('f') loginForm !: NgForm;
  constructor(private router: Router, private accountService: AccountService) { }
  isAuth:boolean = false;
  onSubmit(){
    // console.log(this.loginForm.submitted);
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      
      if(this.accountService.login(username,password)){
        this.isAuth = true;
        if(this.accountService.isLoggedIn){
          this.router.navigate(["app-details"]);
        }
      }
  }
}
