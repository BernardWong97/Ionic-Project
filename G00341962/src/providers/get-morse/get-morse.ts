import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class GetMorseProvider {

  constructor(private http: Http) {
    console.log('Execute GetMorseProvider Provider');
  }

  GetMorseCodes():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/1c288042-4f0f-11e8-8766-03f1a0e86055")
    .map(obs => obs.json());
  }
}
