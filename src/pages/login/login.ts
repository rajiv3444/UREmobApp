import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';
import { AssetsData } from '../../Models/assets-models';


import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  pageTitle:string = 'Login';
  backup: any;
  loginStatus: string;
  public displayResult: any[] = [];
  credentials = { username: '', password: '' };
  //router: Router;

  constructor(private authService: AuthService, private utils: Utils, private logger: Logger, private router: Router, private alertController: AlertController) {
    //this.DoLogout();
    this.utils._isAuthentic = false;
    this.loginStatus = '';
    this.credentials.username = 'root';
    this.credentials.password = 'unitrends1';

  }
  DoLogout()
  {
    this.utils.CleanAuthDetails();
  }


  ionViewDidLoad() {
    this.logger.LogInfo('ionViewDidLoad Login');
  }

  Login() {
    this.authService.DoLogin(this.credentials.username, this.credentials.password)
      .subscribe((resp) => {
        this.OnLoginSuccess(resp);
      },
      err => {
        this.OnLoginFailure();
      });
  }
  OnLoginSuccess(resp) {
    let authToken = JSON.parse(resp['_body']).auth_token;
    this.utils.SetAuthTokenLocal(authToken);
    this.logger.LogInfo('authToken: ' + authToken);
    if (authToken != '') {
      this.utils._isAuthentic = true;
      this.logger.LogInfo('login success');
      this.loginStatus = 'Login success';
      this.router.navigateByUrl('/dashboardmain');
    }
    else {
      this.OnLoginFailure();
    }
  }

  OnLoginFailure() {
    this.utils._isAuthentic = false;
    this.logger.LogError('login failed');
    this.loginStatus = 'Login failed';
    this.router.navigateByUrl('/login');
    this.ALertLoginFailure();
  }

  ALertLoginFailure() {
    let alert = this.alertController.create({
      title: 'Login',
      message: 'Login failed, Please verify uername and password.',
      buttons: ['Ok']
    });
    alert.present();
  }  
}


