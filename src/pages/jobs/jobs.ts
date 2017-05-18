import { Component } from '@angular/core';
import { JobsService } from '../../providers/jobs-service';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Logger } from '../../utility/Logger';
import { GenericData } from '../../Models/common-models';

@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
  //styleUrls:['../pages/jobs/jobs.css']
  styles: [`
  .full-popup
  {
    width: 95% !important;
    height: 95% !important;
  } 
  `]

})
export class JobsPage {
  pageTitle:string = 'Jobs';
  activeJobs: any;
  public displayResult: any[] = [];
  constructor(private jobsService: JobsService, private logger: Logger, private alertController: AlertController) {
    this.GetActiveJobs();
  }

  GetActiveJobs() {
    this.jobsService.GetJobs('active').subscribe((resp) => {
      var jsonResult = JSON.parse(resp['_body']);
      this.activeJobs = jsonResult.data;
    },
      err => {
        this.logger.LogError('Erro while fetching storage data');
      });
  }

  AlertJobDetails(job) {
    // for (let key in job) {
    //   let genericData = new GenericData();
    //   genericData.name = key;
    //   genericData.data = job[key];
    //   this.displayResult.push(genericData);
    // }
    let row = "";
    for (let key in job) {
      row += "<tr><td>" + key + "</td><td>" + job[key] + "</td></tr>";
    }

    let alert = this.alertController.create({
      title: 'Job - ' + job.id,
      subTitle: job.asset_name,
      message: "<table border='1'><tr><th>Key</th><th> value</th></tr>" + row + "</table>",
      buttons: ['Ok'],
      cssClass: 'full-popup',      
    });
    alert.present();
  }
}
