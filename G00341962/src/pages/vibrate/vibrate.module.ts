import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VibratePage } from './vibrate';

@NgModule({
  declarations: [
    VibratePage,
  ],
  imports: [
    IonicPageModule.forChild(VibratePage),
  ],
})
export class VibratePageModule {}
