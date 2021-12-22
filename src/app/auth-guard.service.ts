import { AccountService } from './accounts.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor( private authService: AccountService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated()
        .then(
            (authenticated: any) => {
            if(authenticated){
                return true;
            }
            else{
                this.router.navigate(['/']);
                return false;
            }
        }
        );
    }
}