import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorseCodesPage } from './morse-codes';

@NgModule({
  declarations: [
    MorseCodesPage,
  ],
  imports: [
    IonicPageModule.forChild(MorseCodesPage),
  ],
})
export class MorseCodesPageModule {}
