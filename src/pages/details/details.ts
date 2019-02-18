import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  item:any;
  base:any = "http://moec.com2go.co/";
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
        this.item = navParams.get('article');
        this.base;
  }



}
