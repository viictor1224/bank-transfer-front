import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})
export class TransferHistoryComponent implements OnInit {
  @Input() transfers: any[];


  constructor() { }

  ngOnInit(): void {
  }

}
