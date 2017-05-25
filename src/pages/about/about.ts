import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
pageTitle:string = 'About';
  constructor(public navCtrl: NavController) {

  }

}
