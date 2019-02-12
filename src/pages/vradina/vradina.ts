import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { DetailsPage } from '../details/details';
/**
 * Generated class for the VradinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vradina',
  templateUrl: 'vradina.html',
})
export class VradinaPage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider:DataProvider) {
  }

  ionViewWillEnter(){
      this.dataProvider.getData().subscribe(
        data => {
          this.data = data;
        }
      );
    }
    viewArticle(article){
      this.navCtrl.push(DetailsPage,{
        article:article
      });
    }

}
