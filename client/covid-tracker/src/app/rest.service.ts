import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'https://corona.lmao.ninja/v2/'

  getAll() : Observable<any>{
    let worldUrl = this.url + 'all'
    let data = this.http.get(worldUrl);
    return data;
  }
  getCountries() : Observable<any>{
    let countriesUrl = this.url + 'countries?sort=cases';
    return this.http.get(countriesUrl)
  }
}
