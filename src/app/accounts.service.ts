import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { IAccount } from './Account';
import { map } from 'rxjs/operators';
@Injectable()
export class AccountService{
    public accounts: any = [];
    private _url: string = "../assets/accounts.json";
    constructor( private http: HttpClient, private router:Router){
        this.fetchAccounts();

    }
    fetchAccounts() {
        this.http
        .get(this._url)
        .pipe(map((responseData:any)=> {
            const accArray = [];
            for( const key in responseData){
                if(responseData.hasOwnProperty(key)){
                    accArray.push({...responseData[key]});
                }               
            }
            return accArray;
        }))
        .subscribe(data => 
            this.accounts = data
            );
        }

    isLoggedIn:boolean = false;
    username:string = '';
    login(username:string,password:string){
        const found = this.accounts.some((el: IAccount) =>  el.username === username && password === el.password );
        if(!found){
            return false;
        } 
        this.isLoggedIn = true;
        this.username = username;
        return true;
    }
    logout(){
        this.isLoggedIn = false;        
        this.username = '';
        this.router.navigate(['login'])
    }
    isAuthenticated(){
        const promise= new Promise((resolve, reject) => {        
            resolve(this.isLoggedIn);
        });
        return promise;
    }

    
}