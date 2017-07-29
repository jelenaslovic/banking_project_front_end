
import {AccountService} from "./account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Component} from "@angular/core";
import {Account} from "./account";
import {BankService} from "../bank/bank.service";
import {Bank} from "../bank/Bank";
import {ClientService} from "../client/client.service";
import {Client} from "../client/client";

@Component({
  selector: 'account-add-edit',
  templateUrl: 'account-add-edit.component.html',

})
export class AccountAddEditComponent {

  private account = new Account();
  private banks: Bank[];
  private clients: Client[];
  private id;

  constructor(private clientService:ClientService, private bankService: BankService, private accountService: AccountService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.bankService.findAll().then(banks => this.banks = banks);
    this.clientService.finaAll().then(clients => this.clients = clients);
    console.log(this.banks)
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        if (id != null) {
          this.accountService.findOne(id).then(account => this.account = account);
        }
      });

  }

  create(account: Account){
  console.log(account);
    this.accountService.create(account)
      .then(account => this.router.navigate([('/accounts')]));
  }

  update(account: Account) {
    this.accountService.update(account)
      .then(account => this.router.navigate([('/accounts')]));
  }

}
