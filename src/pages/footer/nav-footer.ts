import { Component } from '@angular/core';

@Component({
    selector: 'nav-footer',
    templateUrl: 'nav-footer.html'
})
export class NavFooterPage {
    routerLink: any;    
    constructor()
    { 
        this.routerLink = {
            dashBoardMain:'/dashboardmain',
            assetsPage:'/assets',
            LoginPage:'/login`',
            AboutPage:'/about'            
        };        
    }    
}