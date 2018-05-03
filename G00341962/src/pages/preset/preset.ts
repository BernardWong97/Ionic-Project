import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { GetMorseProvider } from '../../providers/get-morse/get-morse';
import { SearchProvider } from '../../providers/search/search';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-preset',
  templateUrl: 'preset.html',
})
export class PresetPage {
  searchTerm: string = "";
  listOfPresets: any = [];
  searchControl: FormControl;
  searching: boolean = false;

  constructor(private getMorse: GetMorseProvider, private search: SearchProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresetPage');
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  }

  ngOnInit(){
    this.getMorse.GetMorseCodes().subscribe(data =>
    {
      this.listOfPresets = data.presets;
    });
  }

  setFilteredItems(){
    this.listOfPresets = this.search.filterPrefix(this.searchTerm);
  }
  
  onSearchInput(){
    this.searching = true;
  }
}
