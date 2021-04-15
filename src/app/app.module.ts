import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { UpdateTransferComponent } from './update-transfer/update-transfer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LOCALE_ID } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    TransferHistoryComponent,
    UpdateTransferComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'USL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
