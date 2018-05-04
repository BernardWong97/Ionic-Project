import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(private navCtrl: NavController) {
  } // constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  } // ionViewDidLoad()

  toHome() {
    this.navCtrl.setRoot(HomePage);
  } // toHome()

} // class
