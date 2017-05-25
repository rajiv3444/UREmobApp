import { Component, Input } from '@angular/core';
import { Logger } from '../../utility/Logger';


@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
})
export class HeaderPage {
@Input() headerTitle: string;
 constructor(private logger: Logger) {    
  }

}
