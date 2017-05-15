import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, HttpModule } from '@angular/http';
import { headerCaseNormalise } from '../../node_modules/header-case-normalizer';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
import {LoginResponse} from '../Models/auth-models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AssetsService {
  apiUrl: string;
  res: any;
  constructor(public http: Http, private utils: Utils, private logger: Logger) {    
  }  

  GetAssets(): Observable<LoginResponse> {    
    return this.http.get(this.utils.FormateUrl('api/assets/?sid=1'), this.utils.GetHttpOptions());
  }

  

  // Test(): Observable<LoginResponse> {
  //   let ureApi = 'api/assets/?sid=1';    
  //   //let apiHeaders = new Headers();
  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  //   //apiHeaders.append('Content-Type', 'application/json; charset=UTF-8');
  //   //apiHeaders.append('Accept', 'application/json');
  //   //apiHeaders.append('authtoken', authToken);
  //   //return this.http.get(this.apiUrl, { headers: apiHeaders });

  //   return this.http.get(this.utils.FormateUrl(ureApi), this.utils.GetHttpOptions());

  //   // return this.http.get(this.apiUrl,  { headers: apiHeaders }).subscribe((resp) => {
  //   //   this.res = resp;
  //   // });    
  // }  
}


