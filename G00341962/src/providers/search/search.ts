import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { GetMorseProvider } from '../../providers/get-morse/get-morse';

@Injectable()
export class SearchProvider {
  prefix: any = [];
  letter: any = [];

  constructor(private http: Http, private getMorse: GetMorseProvider) {
    console.log('Hello SearchProvider Provider');
    this.getMorse.GetMorseCodes().subscribe(data =>
      {
        this.prefix = data.presets;
    });
    this.getMorse.GetMorseCodes().subscribe(data =>
      {
        this.letter = data.morse;
    });
  }

  filterPrefix(searchTerm){
    return this.prefix.filter((item)=> {
      return item.description.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1;
    });
  }

  filterLetter(searchTerm){
    return this.letter.filter((item)=> {
      return item.character.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1;
    });
  }
}
