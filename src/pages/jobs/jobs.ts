import { Component } from '@angular/core';
import { JobsService } from '../../providers/jobs-service';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Logger } from '../../utility/Logger';

@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {
activeJobs:any;
  constructor(private jobsService: JobsService, private logger: Logger) {
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
}
