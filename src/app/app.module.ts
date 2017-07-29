import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ClientComponent} from "./client/client-list.component"
import {ClientService} from './client/client.service';
import {HttpModule} from "@angular/http";
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";
import {ClientAddEditComponent} from "./client/client-add-edit.component";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AccountAddEditComponent} from "./account/account-add-edit.component";
import {AccountListComponent} from "./account/account-list.component";
import {AccountService} from "./account/account.service";
import {TransactionService} from "./transaction/transaction.service";
import {TransactionListComponent} from "./transaction/transaction-list.component";
import {TransactionAddComponent} from "./transaction/transaction-add.component";
import {BankService} from "./bank/bank.service";
import {BankComponent} from "./bank/bank-list.component";
import {BankAddEditComponent} from "./bank/bank-add-edit.component";
import {EnumComponent} from "./enum/enum.component";
import {EnumService} from "./enum/enum.service";


@NgModule({
  declarations: [
    AppComponent, ClientComponent, ClientAddEditComponent,
    AccountListComponent, AccountAddEditComponent,
    TransactionListComponent, TransactionAddComponent,
    BankComponent, BankAddEditComponent, EnumComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule, AppRoutingModule, FormsModule
  ],
  providers: [ClientService, AccountService, TransactionService, BankService, EnumService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
