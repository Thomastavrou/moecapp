import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DimotikiPage } from './dimotiki';

@NgModule({
  declarations: [
    DimotikiPage,
  ],
  imports: [
    IonicPageModule.forChild(DimotikiPage),
  ],
})
export class DimotikiPageModule {}
