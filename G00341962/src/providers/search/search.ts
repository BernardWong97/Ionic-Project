import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { GetMorseProvider } from '../../providers/get-morse/get-morse';
import "rxjs/add/operator/map";

// provider for searchbar
@Injectable()
export class SearchProvider {
  prefix: any = [];
  letter: any = [];

  constructor(private http: Http, private getMorse: GetMorseProvider) {
    console.log('Hello SearchProvider Provider');

    // get prefixes data from JSON
    this.getMorse.GetMorseCodes().subscribe(data => {
      this.prefix = data.presets;
    });

    // get morse data from JSON
    this.getMorse.GetMorseCodes().subscribe(data => {
      this.letter = data.morse;
    });
  } // constructor

  filterPrefix(searchTerm){
    // Parse in search string and filter from the data
    return this.prefix.filter((item)=> {
      return item.description.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1;
    });
  } // filterPrefix()

  filterLetter(searchTerm){
    // Parse in search string and filter from the data
    return this.letter.filter((item)=> {
      return item.character.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1;
    });
  }// filterPrefix()

} // class