import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-transfer-front';

  transfers: any[] = [];

  scheduleTransfer($event) {
    console.log($event);
    const transfer = {...$event, scheduling__date: new Date()}; // deserialize transfer to get attributes
    this.transfers.push(transfer);
  }
}
