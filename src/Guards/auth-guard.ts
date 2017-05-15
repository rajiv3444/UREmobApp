import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    //constructor(private loginPage: LoginPage, private logger: Logger) { 
    constructor(private logger: Logger, private utils: Utils, private router: Router) {

        this.logger.LogInfo('Auth Guard called... IsAuthenticated:' + this.utils._isAuthentic);
    }
    canActivate() {
        if (!this.utils._isAuthentic) {
            this.router.navigateByUrl('/login');
            return this.utils._isAuthentic;
        }
        return this.utils._isAuthentic;
    }
}