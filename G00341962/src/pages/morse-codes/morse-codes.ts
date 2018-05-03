import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { GetMorseProvider } from '../../providers/get-morse/get-morse';
import { SearchProvider } from '../../providers/search/search';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-morse-codes',
  templateUrl: 'morse-codes.html',
})

// display each letter and number (a-z/ 0-9) with their morse codes
export class MorseCodesPage {
  searchTerm: string = "";
  listOfCodes: any = [];
  searchControl: FormControl;
  searching: boolean = false;

  constructor(private getMorse: GetMorseProvider, private search: SearchProvider) {
    this.searchControl = new FormControl();
  } // constructor()

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorseCodesPage');

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
      this.listOfCodes = data.morse;
    });
  } // ngOnInit()

  setFilteredItems(){
    // filter the list of items for the search
    this.listOfCodes = this.search.filterLetter(this.searchTerm);
  } // setFilteredItems()
  
  onSearchInput(){
    this.searching = true;
  } // onSearchInput()

} // class
