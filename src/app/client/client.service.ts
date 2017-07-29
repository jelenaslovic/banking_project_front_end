import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Client} from "./client";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class ClientService {
  private URL = 'http://localhost:8080/clients/';

  constructor(private http: Http) {
  }

  finaAll(): Promise<Client[]> {
    return this.http.get(this.URL)
      .toPromise()
      .then(response => response.json() as Client[])
      .catch(this.handleError);
  }

  findOne(id: number): Promise<Client> {
    return this.http.get(this.URL.concat(id.toString()))
      .toPromise()
      .then(response => response.json() as Client)
      .catch(this.handleError);
  }

  create(client: Client): Promise<Client> {
    return this.http.post(this.URL, client)
      .toPromise()
      .then(response => response.json() as Client)
      .catch(this.handleError);
  }

  update(client: Client): Promise<Client> {
    return this.http.put(this.URL.concat(client.id.toString()), client)
      .toPromise()
      .then(response => response.json() as Client)
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
