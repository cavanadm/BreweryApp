import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animationFrameScheduler, Observable, range, zip } from 'rxjs';
import { map } from 'rxjs/operators';

const number$: Observable<number> = range(0, Number.MAX_SAFE_INTEGER, animationFrameScheduler);

@Injectable()
export class BreweryService {

  apiEndpoint:string = "https://api.openbrewerydb.org/breweries";
  constructor(private http:HttpClient) { }

  getNameBreweries(name:string):Observable<Breweries[]> {
    return this.http.get(this.apiEndpoint +"?by_name=" + name) as Observable<Breweries[]>;
  }
  getBreweries():Observable<Breweries[]> {
    return this.http.get(this.apiEndpoint) as Observable<Breweries[]>;
  }
  getStateBreweries(state:string):Observable<Breweries[]> {
    return this.http.get(this.apiEndpoint +"?by_state=" + state) as Observable<Breweries[]>;
  }
    


}


export interface Breweries {
  id: number;
  name: string;
  brewery_type: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;


}

/*[
  {
    id: 530,
    name: "Diving Dog Brewhouse",
    brewery_type: "micro",
    street: "1802 Telegraph Ave",
    city: "Oakland",
    state: "California",
    postal_code: "94612-2110",
    country: "United States",
    longitude: "-122.2698881",
    latitude: "37.807739",
    phone: "5103061914",
    website_url: "http://www.divingdogbrew.com",
    updated_at: "2018-08-23T23:27:26.494Z"
  },
  ...
]
*/