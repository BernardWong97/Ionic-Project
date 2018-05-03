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
    return this.http.get("https://www.jsonblob.com/api/e4516fd9-4e37-11e8-ad5f-1dc5490bd89e")
    .map(obs => obs.json());
  }

}
