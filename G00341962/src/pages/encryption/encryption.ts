import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GetMorseProvider } from '../../providers/get-morse/get-morse';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-encryption',
  templateUrl: 'encryption.html',
})

// encryption page where user inputs get to encrypt into morse codes
export class EncryptionPage {
  listOfCodes: any = [];
  userInput: any;
  str: string;
  encrypted: string;
  showCard: boolean = false;

  constructor(private getMorse: GetMorseProvider, private storage: Storage) {
  } // constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncryptionPage');

    // get json data from provider
    this.getMorse.GetMorseCodes().subscribe(data => {
      this.listOfCodes = data.morse;
    });
  } // ionViewDidLoad()

  ionViewWillEnter(){
    this.storage.get("userInput").then((data) => {
      this.userInput = data;
    }).catch((err) => {
      alert("Error accesssing Storage")
    });
  } // ionViewWillEnter()

  saveInput(){
    // save user input into storage
    this.storage.set("userInput", this.userInput);
  } // saveInput()

  // function encrypting user inputs
  encrypt(){
    // if user input not empty,show morse card and save user input when button is pressed
    if(this.userInput.length != 0){
      this.saveInput()
      this.showCard = true; 
    }
    else{
      this.showCard = false;
    } // if
      
    this.encrypted = ""; // reset variable
    this.str = this.userInput.toUpperCase(); // user input

    for(let i = 0; i < this.userInput.length; i++){ // loop each character of the user input
      for(let key of this.listOfCodes){ // loop every sets of data (character & morse) from the list of codes
        if(this.str.charAt(i) == key.character){ // if the character is matched with the character in the json
          // concat the morse codes seperated with space between each character
          this.encrypted = this.encrypted.concat(key.code);
          this.encrypted = this.encrypted.concat(" ");
        } // if 
      } // for each key

      if(this.str.charAt(i) == " ")
          this.encrypted = this.encrypted.concat(" / "); // if there is space, seperate with '/'
    } // for i
  } // encrypt()

} // class