import {Component} from '@angular/core';
import {EnumService} from "./enum.service";


@Component({
  selector: 'enum-list',
  template: ''
})
export class EnumComponent {

  constructor(private enumService: EnumService) {
  }

  findAllCities() {
    return this.enumService.finaAllCities();
  }

  findAllCountries() {
    return this.enumService.finaAllCountries();
  }

}
