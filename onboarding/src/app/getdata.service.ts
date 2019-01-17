import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fulldata } from './datainterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {


  header = new HttpHeaders().set("App-Secret", "21df4410-4954-11e8-a684-0ee59f2c74f4");
  private _url = 'http://10.0.0.62:9998/marketData/depth/?symbolId=1502060';
  // private _response;
  constructor(private http: HttpClient) { }

  givedata(): Observable<fulldata>{
    return this.http.get<fulldata>(this._url,
     {
      headers: this.header
    });
  }
}
