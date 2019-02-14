import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { DetailsPage } from '../details/details';
import { MesiPage } from '../mesi/mesi';
import { DimotikiPage } from '../dimotiki/dimotiki';
import { AnoteriPage } from '../anoteri/anoteri';
import { VradinaPage } from '../vradina/vradina';

/**
 * Generated class for the PediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedia',
  templateUrl: 'pedia.html',
})
export class PediaPage {

  hello:any;
  pages:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider:DataProvider) {

  }

  ionViewWillEnter(){
      this.dataProvider.getData().subscribe(
        hello => {
          if(Array.isArray(hello)){
            this.hello =  hello.filter(item=>item.parent==4);
          }
      });
    }


ViewData(link){

  let pages = [
    { title: 'Προδημοτική/Δημοτική', component: DimotikiPage },
    { title: 'Ανώτερη', component: AnoteriPage },
    { title: 'Μεση Γενικη & Τεχνικη', component: MesiPage },
    { title: 'Απογευματινά Βραδινά Προγράμματα', component: VradinaPage }

  ];

  for (let page of pages) {
      if(link == page.title) {
        this.navCtrl.push(page.component);
        }
      }

}
}
