import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PresetPage } from '../preset/preset';
import { Storage } from '@ionic/storage';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private storage: Storage) {
  } // constructor

  ionViewDidLoad() {
    // check if an intro-done key has been set in storage
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(IntroPage);
      } // if
    });
  } // ionViewDidLoad()

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
