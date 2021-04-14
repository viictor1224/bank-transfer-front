import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  // any -> TransferInput
  @Output() inTransfer = new EventEmitter<any>();

  value: number;
  origin__account: string;
  destination__account: string;
  transfer__date: string;

  scheduleTransfer() {
    console.log('new transfer requested');
    const emitValues = { value: this.value, origin__account: this.origin__account, destination__account: this.destination__account, transfer__date: this.transfer__date, };

    this.inTransfer.emit(emitValues);
    this.clearForm();

  }


  clearForm() {
    this.value = null;
    this.origin__account = "";
    this.destination__account = "";
    this.transfer__date = "";
  }
}
