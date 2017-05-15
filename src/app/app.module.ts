import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { MyApp } from './app.component';

//#
import { RouterModule, Routes } from '@angular/router';

//user defined
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { AssetsPage } from '../pages/assets/assets';
import { BackupsPage } from '../pages/backups/backups';
import { NavFooterPage } from '../pages/footer/nav-footer';
import { DashBoardMainPage } from '../pages/dashboard/dashboard-main';
import { PageNotFoundComponent } from '../pages/others/not-found';
import { TabsPage } from '../pages/tabs/tabs';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
import { AuthGuard } from '../Guards/auth-guard';

//services
import { AuthService } from '../providers/auth-service';
import { AssetsService } from '../providers/assets-service';
import { BackupsService } from '../providers/backups-service';
import { DashBoardService } from '../providers/dashboard-service';

//ionic
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams } from '../../node_modules/ionic-angular';

//export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

const appRoutes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'dashboardmain', component: DashBoardMainPage, canActivate:[AuthGuard] },
  { path: 'about', component: AboutPage },  
  { path: 'assets', component: AssetsPage, canActivate:[AuthGuard] },
  { path: 'backups', component: BackupsPage, canActivate:[AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    LoginPage,
    TabsPage,
    AssetsPage,
    BackupsPage,
    PageNotFoundComponent,
    NavFooterPage,
    DashBoardMainPage    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    AuthService,
    AssetsService,
    BackupsService,
    DashBoardService,
    Utils,
    Logger,
    AuthGuard,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

  ]
})
export class AppModule { }
