import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Bank} from "./bank";
import {BankService} from "./bank.service";


@Component({
  selector: 'bank-list',
  templateUrl: 'bank-list.component.html',

})
export class BankComponent {


  private banks: Bank[];
  private deleteStatusCode;

  constructor(private bankService: BankService, private router: Router) {
  }

  ngOnInit(): void {
    this.bankService.findAll().then(banks => this.banks = banks);
  }

  delete(id: Number) {
    this.bankService.delete(id).catch(status => this.deleteStatusCode = status);
    this.ngOnInit();
  }

  create() {
    this.router.navigate([('/banks/new')]);
  }

  edit(id) {
    this.router.navigate([('/banks/edit/' + id)]);
  }
}
