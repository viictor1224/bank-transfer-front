import { UpdateTransferComponent } from './update-transfer/update-transfer.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'new-transfer', pathMatch: 'full'},
  {path: 'transfer-history', component: TransferHistoryComponent},
  {path: 'new-transfer', component: NewTransferComponent},
  {path: 'update-transfer/:id', component: UpdateTransferComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
