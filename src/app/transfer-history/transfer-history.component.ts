import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})
export class TransferHistoryComponent implements OnInit {

  constructor(private service: TransferService,
    private router: Router) { }
  transfers: any[];

  ngOnInit(): void {
    this.service.all().subscribe((transfers: Transfer[]) => {
      console.table(transfers);
      this.transfers = transfers;
    })
  }

  updateTransfer(id: number){
    this.router.navigate(['update-transfer', id]);
  }
}
