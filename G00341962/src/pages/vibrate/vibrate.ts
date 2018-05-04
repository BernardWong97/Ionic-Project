import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { GetMorseProvider } from '../../providers/get-morse/get-morse';
import { SearchProvider } from '../../providers/search/search';
import { Vibration } from '@ionic-native/vibration';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-vibrate',
  templateUrl: 'vibrate.html',
})
export class VibratePage {
  searchTerm: string = "";
  listOfPresets: any = [];
  searchControl: FormControl;
  searching: boolean = false;

  constructor(private getMorse: GetMorseProvider, private search: SearchProvider, private vibration: Vibration) {
    this.searchControl = new FormControl();
  } // constructor()

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');

    // filter item when search bar is inputted
    this.setFilteredItems();

    // set a delay to prevent spam and let user input finish before searching
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  } // ionViewDidLoad()

  ngOnInit(){
    // initialize the content of the view
    this.getMorse.GetMorseCodes().subscribe(data => {
      this.listOfPresets = data.presets;
    });
  } // ngOnInit()

  setFilteredItems(){
    // filter the list of items for the search
    this.listOfPresets = this.search.filterPrefix(this.searchTerm);
  } // setFilteredItems()
  
  onSearchInput(){
    this.searching = true;
  } // onSearchInput()

  vibrate(code){
    // self-written thread.sleep method to delay execution
    let Thread = {
      sleep: function(ms) {
        var start = Date.now();
        
        while (true) {
          var clock = (Date.now() - start);
          if (clock >= ms) break;
        }
      } // sleep()
    };

    // for loop each code
    for(let i = 0; i < code.length; i++){
      if(code.charAt(i) == "."){
        this.vibration.vibrate(500);
        Thread.sleep(1000);
      }
      else if(code.charAt(i) == "-"){
        this.vibration.vibrate(1000);
        Thread.sleep(1000);
      }
      else if(code.charAt(i) == " "){
        Thread.sleep(1000);
      } // if..else
    } // for
  } // vibrate()

} // class