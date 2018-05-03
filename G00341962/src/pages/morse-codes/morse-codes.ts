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
export class MorseCodesPage {
  searchTerm: string = "";
  listOfCodes: any = [];
  searchControl: FormControl;
  searching: boolean = false;

  constructor(private getMorse: GetMorseProvider, private search: SearchProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorseCodesPage');
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  }

  ngOnInit(){
    this.getMorse.GetMorseCodes().subscribe(data =>
    {
      this.listOfCodes = data.morse;
    });
  }

  setFilteredItems(){
    this.listOfCodes = this.search.filterLetter(this.searchTerm);
  }
  
  onSearchInput(){
    this.searching = true;
  }
}
