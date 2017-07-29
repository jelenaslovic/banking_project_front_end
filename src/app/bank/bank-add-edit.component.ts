import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Bank} from "./Bank";
import {BankService} from "./bank.service";
import {EnumService} from "../enum/enum.service";


@Component({
  selector: 'bank-add-edit',
  templateUrl: 'bank-add-edit.component.html',

})
export class BankAddEditComponent {

  private bank = new Bank();
  private id;
  private cities: String[];
  private countries: String[];


  constructor(private enumService: EnumService, private bankService: BankService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.enumService.finaAllCountries().then(countries => this.countries = countries);
    this.enumService.finaAllCities().then(cities => this.cities = cities);
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        if (id != null) {
          this.bankService.findOne(id).then(client => this.bank = client);
        }
      });

  }

  create(bank: Bank) {
    this.bankService.create(bank)
      .then(bank => this.router.navigate([('/banks')]));
  }

  update(bank: Bank) {
    console.log("update");
    this.bankService.update(bank)
      .then(bank => this.router.navigate([('/banks')]));
  }

}
