import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  // any -> TransferInput
  @Output() inTransfer = new EventEmitter<any>();

  transferValue: number;
  originAccount: string;
  destinationAccount: string;
  transferDate: string;

  constructor(private service: TransferService) {}

  scheduleTransfer() {
    console.log('new transfer requested');
    const emitValues: Transfer = {
      transferValue: this.transferValue,
      originAccount: this.originAccount,
      destinationAccount: this.destinationAccount,
      transferDate: this.transferDate,
    };

    this.service.add(emitValues)
    .subscribe(result => {
      console.log(result);
      this.clearForm;
    },
    error => console.error(error)
    );
  }

  clearForm() {
    this.transferValue = null;
    this.originAccount = '';
    this.destinationAccount = '';
    this.transferDate = '';
  }
}
