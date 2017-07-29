import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Transaction} from "./transaction";
import {TransactionService} from "./transaction.service";
import {AccountService} from "../account/account.service";
import {Account} from "../account/Account";

@Component({
  selector: 'transaction-add',
  templateUrl: '/transaction-add.component.html',

})
export class TransactionAddComponent {

  private transaction = new Transaction();
  private accounts: Account[];

  private id;

  constructor(private accountService: AccountService, private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.accountService.finaAll().then(accounts => this.accounts = accounts);

  }

  create(transaction: Transaction) {
    this.transactionService.create(transaction)
      .then(client => this.router.navigate([('/transactions')]));
  }

}
