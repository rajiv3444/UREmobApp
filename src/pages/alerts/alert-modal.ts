import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'alert-modal.html'
})
export class AlertsModalPage implements OnInit {
    pageTitle = 'Description'
    displayData: any[] = [];        
    constructor(private navParams: NavParams, public viewCtrl: ViewController) {
    }

    ngOnInit() {
        this.displayData = this.navParams.get('alertItemsArray');
    }

}
