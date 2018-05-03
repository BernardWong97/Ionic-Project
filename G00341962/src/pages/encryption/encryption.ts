import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GetMorseProvider } from '../../providers/get-morse/get-morse';

@IonicPage()
@Component({
  selector: 'page-encryption',
  templateUrl: 'encryption.html',
})
export class EncryptionPage {
  listOfCodes: any = [];
  userInput: any;
  str: string;
  encrypted: string;
  showCard: boolean = false;

  constructor(private getMorse: GetMorseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncryptionPage');

    this.getMorse.GetMorseCodes().subscribe(data =>
      {
        this.listOfCodes = data.morse;
      });
  }

  encrypt(){
    this.showCard = true;

    this.encrypted = "";
    this.str = this.userInput.toUpperCase();
    for(let i = 0; i < this.userInput.length; i++){
      for(let key of this.listOfCodes){
        if(this.str.charAt(i) == key.character){
          this.encrypted = this.encrypted.concat(key.code);
          this.encrypted = this.encrypted.concat(" ");
        }
      }
      if(this.str.charAt(i) == " ")
          this.encrypted = this.encrypted.concat(" / ");
    }
  }
}
