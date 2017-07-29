import {Component} from '@angular/core';
import {ClientService} from "./client.service";
import {Client} from "./client";
import {Router} from '@angular/router';

@Component({
  selector: 'client-list',
  templateUrl: 'client-list.component.html',

})
export class ClientComponent {


  private clients: Client[];
  private deleteStatusCode;

  constructor(private clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {
    this.clientService.finaAll().then(clients => this.clients = clients);
  }

  delete(id: Number) {
    this.clientService.delete(id).catch(status => this.deleteStatusCode = status);
    this.ngOnInit();
  }

  create() {
    this.router.navigate([('/clients/new')]);
  }

  edit(id) {
    this.router.navigate([('/clients/edit/' + id)]);
  }
}
