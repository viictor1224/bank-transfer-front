import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'transfer-history', pathMatch: 'full'},
  {path: 'transfer-history', component: TransferHistoryComponent},
  {path: 'new-transfer', component: NewTransferComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
