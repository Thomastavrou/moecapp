import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { DetailsPage } from '../details/details';
import { MesiPage } from '../mesi/mesi';
import { DimotikiPage } from '../dimotiki/dimotiki';
import { AnoteriPage } from '../anoteri/anoteri';
import { VradinaPage } from '../vradina/vradina';
import { ProdimotikiPage } from '../prodimotiki/prodimotiki';
import { TexnikiPage } from '../texniki/texniki';

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
    { title: 'Δημοτική', component: DimotikiPage },
    { title: 'Προδημοτική', component: ProdimotikiPage },
    { title: 'Μέση Γενική', component: MesiPage },
    { title: 'Τεχνική Επαγγελματική', component: TexnikiPage },
    { title: 'Ανώτερη', component: AnoteriPage },
    { title: 'Απογευματινά Βραδινά Προγράμματα', component: VradinaPage }

  ];

  for (let page of pages) {
      if(link == page.title) {
        this.navCtrl.push(page.component);
        }
      }

}
}
