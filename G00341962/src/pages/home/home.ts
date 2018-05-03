import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PresetPage } from '../preset/preset';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  toMorseCodes(){
    this.navCtrl.push("MorseCodesPage");
  }

  toPreset(){
    this.navCtrl.push(PresetPage);
  }

  toEncryption(){
    this.navCtrl.push("EncryptionPage");
  }

}
