import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PresetPage } from '../preset/preset';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {
  } // constructor

  toMorseCodes(){
    this.navCtrl.push("MorseCodesPage");
  } // toMorseCodes()

  toPreset(){
    this.navCtrl.push(PresetPage);
  } // toPreset()

  toEncryption(){
    this.navCtrl.push("EncryptionPage");
  } // toEncryption()

  toVibration(){
    this.navCtrl.push("VibratePage");
  } // toVibration()

} // class
