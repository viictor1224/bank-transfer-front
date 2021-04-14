import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})
export class TransferHistoryComponent implements OnInit {

  constructor(private service: TransferService) { }
  transfers: any[];

  ngOnInit(): void {
    this.transfers = this.service.transfers;
  }

}
