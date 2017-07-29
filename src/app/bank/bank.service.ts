import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Bank} from "./bank";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class BankService {
  private URL = 'http://localhost:8080/banks/';

  constructor(private http: Http) {
  }

  findAll(): Promise<Bank[]> {
    return this.http.get(this.URL)
      .toPromise()
      .then(response => response.json() as Bank[])
      .catch(this.handleError);
  }

  findOne(id: number): Promise<Bank> {
    return this.http.get(this.URL.concat(id.toString()))
      .toPromise()
      .then(response => response.json() as Bank)
      .catch(this.handleError);
  }

  create(bank: Bank): Promise<Bank> {
    return this.http.post(this.URL, bank)
      .toPromise()
      .then(response => response.json() as Bank)
      .catch(this.handleError);
  }

  update(bank: Bank): Promise<Bank> {
    return this.http.put(this.URL.concat(bank.id.toString()), bank)
      .toPromise()
      .then(response => response.json() as Bank)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.URL.concat(id))
      .toPromise()
      .then(response => response.status)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
