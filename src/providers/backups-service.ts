import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, HttpModule } from '@angular/http';
import { headerCaseNormalise } from '../../node_modules/header-case-normalizer';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
import {LoginResponse} from '../Models/auth-models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BackupsService {
  apiUrl: string;
  res: any;
  constructor(public http: Http, private utils: Utils, private logger: Logger) {   
    this.logger.LogInfo('backups servide called'); 
  }  

  GetBackup(): Observable<any> {    
    let body = JSON.stringify("");    
    return this.http.post(this.utils.FormateUrl('api/backups'), body, this.utils.GetHttpOptions());
  }
}


