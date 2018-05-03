import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncryptionPage } from './encryption';

@NgModule({
  declarations: [
    EncryptionPage,
  ],
  imports: [
    IonicPageModule.forChild(EncryptionPage),
  ],
})
export class EncryptionPageModule {}
