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

  private getTransfers() {
    this.service.all().subscribe(data => {
      this.transfers = data;
    })
  }

  updateTransfer(id: number){
    this.router.navigate(['update-transfer', id]);
  }

  deleteTransfer(id: number) {
    this.service.delete(id).subscribe( data => {
      console.log(data);
      this.getTransfers();
    });
  }


}
