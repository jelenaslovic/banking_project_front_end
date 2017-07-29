import {Component} from '@angular/core';
import {TransactionService} from "./transaction.service";
import {Transaction} from "./transaction";
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from "../client/client.service";
import {Client} from "../client/client";

@Component({
  selector: 'transaction-list',
  templateUrl: 'transaction-list.component.html',

})
export class TransactionListComponent {

  private transactions: Transaction[];
  private clients: Client[];

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router, private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.finaAll().then(clients => this.clients = clients);

    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        if (id != null) {
          this.transactionService.findByClient(id).then(transactions => this.transactions = transactions);
        }
      });
  }


  findByClient(id: number) {
    this.router.navigate([('transactions/clients/' + id)]);
    this.transactionService.findByClient(id).then(transactions => this.transactions = transactions);
  }

  create() {
    this.router.navigate([('/transactions/new')]);
  }
}
