import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ClientComponent} from "./client/client-list.component";
import {ClientAddEditComponent} from "./client/client-add-edit.component";
import {AccountListComponent} from "./account/account-list.component";
import {AccountAddEditComponent} from "./account/account-add-edit.component";
import {TransactionListComponent} from "./transaction/transaction-list.component";
import {TransactionAddComponent} from "./transaction/transaction-add.component";
import {BankComponent} from "./bank/bank-list.component";
import {BankAddEditComponent} from "./bank/bank-add-edit.component";

const routes: Routes = [
  {path: 'clients', component: ClientComponent},
  {path: 'clients/new', component: ClientAddEditComponent},
  {path: 'clients/edit/:id', component: ClientAddEditComponent},

  {path: 'accounts', component: AccountListComponent},
  {path: 'accounts/new', component: AccountAddEditComponent},
  {path: 'accounts/edit/:id', component: AccountAddEditComponent},

  {path: 'transactions', component: TransactionListComponent},
  {path: 'transactions/clients/:id', component: TransactionListComponent},
  {path: 'transactions/new', component: TransactionAddComponent},

  {path: 'banks', component: BankComponent},
  {path: 'banks/new', component: BankAddEditComponent},
  {path: 'banks/edit/:id', component: BankAddEditComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
