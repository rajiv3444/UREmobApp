import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, HttpModule } from '@angular/http';
import { headerCaseNormalise } from '../../node_modules/header-case-normalizer';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
import {LoginResponse} from '../Models/auth-models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {    
  constructor(public http: Http, private utils: Utils, private logger: Logger) {
    this.logger.LogInfo('AuthService Provider constructor');
  }
  
  DoLogin(username: string, password: string): Observable<LoginResponse> {    
    let body = JSON.stringify({ username, password });  
    let apiIp = '10.102.48.91';      //192.168.8.160
    return this.http.post('http://'+apiIp+'/api/login', body, { headers: this.utils.GetEmptyHeader() });
  } 
}

