import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICurrency } from './model/ICurrency';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin':'*'
  })
};
@Injectable()
export class ComkartServiceService {

  private _currencyUrl='/comKart/currencies';
  

  constructor(private _http: HttpClient)
    {

    }


    onView():Observable<ICurrency[]>{
      //console.log(currency);
      
      return this._http.get<ICurrency[]>(this._currencyUrl);
     // return this._http.get<ICurrency>(this._customerUrl,currency,httpOptions);
    }

}
