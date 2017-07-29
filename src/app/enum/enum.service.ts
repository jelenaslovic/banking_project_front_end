import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class EnumService {
  private city_URL = 'http://localhost:8080/cities/';
  private country_URL = 'http://localhost:8080/countries/';

  constructor(private http: Http) {
  }

  finaAllCities(): Promise<String[]> {
    return this.http.get(this.city_URL)
      .toPromise()
      .then(response => response.json() as String[]);
  }

  finaAllCountries(): Promise<String[]> {
    return this.http.get(this.country_URL)
      .toPromise()
      .then(response => response.json() as String[]);
  }

}
