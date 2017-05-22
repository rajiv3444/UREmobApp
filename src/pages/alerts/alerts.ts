import { Component } from '@angular/core';
import { AlertsService } from '../../providers/alerts-service';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';
import { GenericData } from '../../Models/common-models';
import {  AlertController } from 'ionic-angular';

@Component({
    selector: 'alerts',
    templateUrl: 'alerts.html'
   // styles: ['.even { background-color: #ccc;}','.odd { background-color:#FFFFFF; }']
   
})
export class AlertsPage {
    pageTitle:string = 'Alerts';
    public displayAlerts: any[] = [];
   
    constructor(private alertsService: AlertsService, private utils: Utils, private logger: Logger,private alertController: AlertController) {
        this.GetAlerts();
    }

    GetAlerts() {
        this.alertsService.GetAlerts()
            .subscribe((resp) => {
                var jsonResult = JSON.parse(resp['_body']);
                this.displayAlerts = jsonResult.data;
            },
            err => {
                this.logger.LogError('Erro while fetching alerts data');
            });
    }
    AlertDetail(alertItems)  {
         let row = "";
       for (let key in alertItems) {
      row += "<tr><td>" + key + "</td><td>" + alertItems[key] + "</td></tr>";
    }

    let alert = this.alertController.create({
      title: 'alert - ' + alertItems.id,
      subTitle: alertItems.created,
      message: "<table border='1'><tr><th>Key</th><th> value</th></tr>" + row + "</table>",
      buttons: ['Ok'],
      cssClass: 'full-popup',      
    });
    alert.present();
  }
    

}