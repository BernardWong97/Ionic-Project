import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GetMorseProvider } from '../../providers/get-morse/get-morse';

@IonicPage()
@Component({
  selector: 'page-morse-codes',
  templateUrl: 'morse-codes.html',
})
export class MorseCodesPage {
  listOfCodes: any = [];

  constructor(private getMorse: GetMorseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorseCodesPage');
  }

  ngOnInit(){
    this.getMorse.GetMorseCodes().subscribe(data =>
    {
      this.listOfCodes = data.morse;
    });
  }

}
