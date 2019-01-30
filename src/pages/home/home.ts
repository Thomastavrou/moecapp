import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { PediaPage } from '../pedia/pedia';
import { PolitismosPage } from '../politismos/politismos';
import { AthlitismosPage } from '../athlitismos/athlitismos';
import { NeoleaPage } from '../neolea/neolea';
import { AnakinosisPage } from '../anakinosis/anakinosis';
import { EpikerotitaPage } from '../epikerotita/epikerotita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  pages:any;

constructor(public navCtrl: NavController, private dataProvider:DataProvider) {

  }


ionViewWillEnter(){
      this.dataProvider.getData().subscribe(
        data => {
          function isParent(parent) {
            return parent == 0;
          }
          function isTemplate(template) {
            return template == 4;
          }
          function filterHome(item){
              if(isParent(item.parent) && isTemplate(item.template)){
                return true;
              }
          }
          if(Array.isArray(data)){
            this.data =  data.filter(filterHome);
          }

            }
      );
    }

ViewData(link){

  let pages = [
    { title: 'Παιδεία', component: PediaPage },
    { title: 'Πολιτισμός', component: PolitismosPage },
    { title: 'Αθλητισμός', component: AthlitismosPage },
    { title: 'Νεολαία', component: NeoleaPage },
    { title: 'Ανακοινώσεις', component: AnakinosisPage },
    { title: 'Επικαιρότητα', component: EpikerotitaPage }
  ];

  for (let page of pages) {
      if(link == page.title) {
        this.navCtrl.push(page.component);
      }
  }


}

}
