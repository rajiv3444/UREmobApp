import { Component } from '@angular/core';
import { BackupsService } from '../../providers/backups-service';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';
import { GenericData } from '../../Models/common-models';

@Component({
    selector: 'backups',
    templateUrl: 'backups.html'
})
export class BackupsPage {
    public displayResult: any[] = [];
    constructor(private backupsService: BackupsService, private utils: Utils, private logger:Logger) {
        this.GetBackup();
    }

    GetBackup() {
        this.backupsService.GetBackup()
            .subscribe((resp) => {
                var jsonResult = JSON.parse(resp['_body']);
                for (let key in jsonResult.BackupStatus.UREUB[0]) {
                    let data = new GenericData();
                    data.name = key;
                    data.data = jsonResult.BackupStatus.UREUB[0][key];
                    this.displayResult.push(data);
                }
            },
            err => {
                    this.logger.LogError('Erro while fetching backup data');
            }
        );
    }


}