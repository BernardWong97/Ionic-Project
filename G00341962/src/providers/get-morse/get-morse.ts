import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

// provides function to read data from url
@Injectable()
export class GetMorseProvider {

  constructor(private http: Http) {
    console.log('Execute GetMorseProvider Provider');
  } // constructor

  // get json data from url
  GetMorseCodes():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/1c288042-4f0f-11e8-8766-03f1a0e86055")
    .map(obs => obs.json());
  } // GetMorseCodes()
  
} // class
