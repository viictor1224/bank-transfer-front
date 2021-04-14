import { TransferService } from './services/transfer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-transfer-front';

  constructor(private service: TransferService) {
  }

  scheduleTransfer($event) {
    this.service.add($event)
  }

}
