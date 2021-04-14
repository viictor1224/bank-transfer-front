import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NewTransferComponent, TransferHistoryComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'USL'
    }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
