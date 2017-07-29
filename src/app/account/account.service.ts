import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {Account} from "./account";

@Injectable()
export class AccountService {
  private URL = 'http://localhost:8080/accounts/';

  constructor(private http: Http) {
  }

  finaAll(): Promise<Account[]> {
    return this.http.get(this.URL)
      .toPromise()
      .then(response => response.json() as Account[])
      .catch(this.handleError);
  }

  findOne(id: number): Promise<Account> {
    return this.http.get(this.URL.concat(id.toString()))
      .toPromise()
      .then(response => response.json() as Account)
      .catch(this.handleError);
  }

  create(account: Account): Promise<Account> {
    return this.http.post(this.URL, account)
      .toPromise()
      .then(response => response.json() as Account)
      .catch(this.handleError);
  }

  update(account: Account): Promise<Account> {
    return this.http.put(this.URL.concat(account.id.toString()), account)
      .toPromise()
      .then(response => response.json() as Account)
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
