import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "./client.service";
import {Client} from "./client";
import {EnumService} from "../enum/enum.service";

@Component({
  selector: 'client-add-edit',
  templateUrl: 'client-add-edit.component.html',

})
export class ClientAddEditComponent {

  private client = new Client();
  private id;
  private cities: String[];
  private countries: String[];

  constructor(private enumService: EnumService, private clientService: ClientService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.enumService.finaAllCountries().then(countries => this.countries = countries);
    this.enumService.finaAllCities().then(cities => this.cities = cities);
    console.log(this.cities);
    console.log(this.countries);

    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        if (id != null) {
          this.clientService.findOne(id).then(client => this.client = client);
        }
      });

  }

  create(client: Client) {
    this.clientService.create(client)
      .then(client => this.router.navigate([('/clients')]));
  }

  update(client: Client) {
    console.log("update");
    this.clientService.update(client)
      .then(client => this.router.navigate([('/clients')]));
  }

}
