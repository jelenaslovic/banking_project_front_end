import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {Transaction} from "./transaction";

@Injectable()
export class TransactionService {
  private URL = 'http://localhost:8080/transactions/';

  constructor(private http: Http) {
  }

  findByClient(id: number): Promise<Transaction[]> {
    return this.http.get(this.URL.concat("clients/" + id.toString()))
      .toPromise()
      .then(response => response.json() as Transaction)
      .catch(this.handleError);
  }

  create(client: Transaction): Promise<Transaction> {
    return this.http.post(this.URL, client)
      .toPromise()
      .then(response => response.json() as Transaction)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
