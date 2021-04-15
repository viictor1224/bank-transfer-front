import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent   {

  @Output() inTransfer = new EventEmitter<any>();

  transferValue: number;
  originAccount: string;
  destinationAccount: string;
  transferDate: string;

  constructor(private service: TransferService, private router: Router) {}

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
      this.goToTransferHistory();
    },
    error => console.error(error)
    );
  }

  goToTransferHistory(){
    this.router.navigateByUrl('transfer-history')
  }

  clearForm() {
    this.transferValue = null;
    this.originAccount = '';
    this.destinationAccount = '';
    this.transferDate = '';
  }
}
