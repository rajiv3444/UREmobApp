import { Component } from '@angular/core';
import { Logger } from '../../utility/Logger';


@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
})
export class HeaderPage {

 constructor(private logger: Logger) {
    
  }

}
