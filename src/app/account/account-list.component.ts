import {Component} from '@angular/core';

import {Router} from '@angular/router';
import {AccountService} from "./account.service";
import {Account} from "./account";

@Component({
  selector: 'account-list',
  templateUrl: 'account-list.component.html',

})
export class AccountListComponent {


  private accounts: Account[];
  private deleteStatusCode;

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.accountService.finaAll().then(accounts => this.accounts = accounts);
  }

  delete(id: Number) {
    this.accountService.delete(id).catch(status => this.deleteStatusCode = status);
    this.ngOnInit();
  }

  create() {
    this.router.navigate([('/accounts/new')]);
  }

  edit(id) {
    this.router.navigate([('/accounts/edit/' + id)]);
  }
}
