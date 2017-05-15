import { Component } from '@angular/core';
import { AssetsService } from '../../providers/assets-service';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';
import { GenericData } from '../../Models/common';

@Component({
    selector: 'assets',
    templateUrl: 'assets.html'
})
export class AssetsPage {    
    public displayResult: any[] = [];
    constructor(private assetsService: AssetsService, private utils: Utils, private logger:Logger) {
        this.GetAssets();
    }

    GetAssets() {        
        this.assetsService.GetAssets()
            .subscribe((resp) => {
                var jsonResult = JSON.parse(resp['_body']);
                //this.displayResult = this.utils.FormKeyValueData(jsonResult);

                for (let key in jsonResult.data[0]) {
                    let data = new GenericData();
                    data.name = key;
                    data.data = jsonResult.data[0][key];
                    this.displayResult.push(data);
                }
            },
            err => {
                    this.logger.LogError('Erro while fetching assets data');
            });
    }

}