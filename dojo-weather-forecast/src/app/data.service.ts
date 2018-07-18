import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//http://api.openweathermap.org/data/2.5/weather/?q=chicago,il,usa&APPID=f158e9cda306a30dc92bd611b792e18e

@Injectable({
  providedIn: 'root'
})
export class DataService {
 apikey = '&APPID=f158e9cda306a30dc92bd611b792e18e';
  constructor(private _http: HttpClient) { }
  getweatherInfo= function(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather/?q=${city},usa${this.apikey}`)
}

}
