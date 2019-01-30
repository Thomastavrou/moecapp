import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesiPage } from './mesi';

@NgModule({
  declarations: [
    MesiPage,
  ],
  imports: [
    IonicPageModule.forChild(MesiPage),
  ],
})
export class MesiPageModule {}
