import { AccountService } from './accounts.service';
import { AfterContentChecked, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements  AfterContentChecked {
  title = 'application-manager';
  isLoggedIn:boolean = false;
  username: string = ''
  currentUrl: string = '/login'
  btn = 'Register'
  constructor(private router: Router, private accountservice: AccountService){
  }
  ngAfterContentChecked():void {
    if(this.isLoggedIn != this.accountservice.isLoggedIn){
      this.isLoggedIn = this.accountservice.isLoggedIn;
      this.username = this.accountservice.username;
    }
    this.currentUrl = (this.router.url === '\/register')? '/login' : '/register'
    this.btn = (this.router.url==='/register')? 'Login' : 'Register'
  }
  ngOnInit(){
      console.log(this.currentUrl)

  }
  onLogout(){
    this.accountservice.logout();
    // console.log(this.accountservice.isLoggedIn);    
    this.router.navigate([""])
  }
}
