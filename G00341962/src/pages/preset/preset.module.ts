import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresetPage } from './preset';

@NgModule({
  declarations: [
    PresetPage,
  ],
  imports: [
    IonicPageModule.forChild(PresetPage),
  ],
})
export class PresetPageModule {}
