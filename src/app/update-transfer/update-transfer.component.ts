import { TransferService } from './../services/transfer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transfer } from 'transfer';

@Component({
  selector: 'app-update-transfer',
  templateUrl: './update-transfer.component.html',
  styleUrls: ['./update-transfer.component.scss'],
})
export class UpdateTransferComponent implements OnInit {

  id: number;
  transfer: Transfer = new Transfer();

  constructor(
    private transferService: TransferService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transfer = new Transfer();

    this.id = this.route.snapshot.params['id'];

    this.transferService.getTransferById(this.id)
    .subscribe((data) => {
      console.log(data);
      this.transfer = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.transferService.update(this.id, this.transfer).subscribe((data) => {      // console.log(data);      // this.transfer = new Transfer();
      this.goToTransferHistory();
      },
      (error) => console.log(error)
    );
  }

  goToTransferHistory() {
    this.router.navigateByUrl('transfer-history');
  }
}
