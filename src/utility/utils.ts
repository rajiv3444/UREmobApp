import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { GenericData } from '../Models/common-models';
//import { LoginPage } from '../Pages/Login/Login';

@Injectable()
export class Utils { 
    _isAuthentic:boolean;
    constructor()
    {        
        this._isAuthentic = false;
    }           
    FormateUrl(api: string) {
        let wrapperApiUrlPrefix = 'http://localhost:54434';// "http://192.168.5.60:54434";
        return wrapperApiUrlPrefix + "/api/GenericApi/TestApi?api=" + api;
    }

    GetEmptyHeader() {
        return new Headers();
        //httpRequestHeaders.append('Content-Type', 'application/json; charset=UTF-8');
        //return httpRequestHeaders;
    }

    GetHeadersWithAuthToken() {
        let httpRequestHeaders = this.GetEmptyHeader();
        httpRequestHeaders.append('Content-Type', 'application/json; charset=UTF-8');
        //httpRequestHeaders.append('Accept', 'application/json');
        httpRequestHeaders.append('authtoken', this.GetAuthTokenLocal());
        return httpRequestHeaders;
    }

    GetHttpOptions() {
        let httpRequestHeaders = this.GetHeadersWithAuthToken();
        let requestOptions = new RequestOptions({ headers: httpRequestHeaders });
        return requestOptions;
    }

    IsAuthenticated()
    {
        return this._isAuthentic;
    }
    
    // CreateBody(...params:any[])
    // {
    //     //let temp = JSON.stringify();
    //     //let paramCount = params.length;
    //     let user = 'rr';
    //     let pwd = 'ttt';
    //     return JSON.stringify({params});
    // }

    GetAuthTokenLocal() {
        return localStorage.getItem('authToken');
    }

    SetAuthTokenLocal(authToken: string) {
        localStorage.setItem('authToken', authToken);
    }    

    FormKeyValueData(jsonResult) {
        let formedData: any[] = [];

        // for (let key in data) {
        //     let data = new GenericData();
        //     this.genericData.name = key;
        //     this.genericData.data = data[key];
        //     formedData.push(this.genericData);
        // }
        for (let key in jsonResult.data[0]) {
            let data = new GenericData();
            data.name = key;
            data.data = jsonResult.data[0][key];
            formedData.push(data);
        }
        return formedData;
    }
}