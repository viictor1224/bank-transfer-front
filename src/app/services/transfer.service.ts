import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transfersList: any[];

  constructor() {
    this.transfersList = [];
  }

  get transfers(){
    return this.transfersList;
  }

  add(transfer: any) {
    this.addAttribute(transfer)

    this.transfers.push(transfer);
  }

  private addAttribute(transfer: any){
    transfer.scheduling__date = new Date();
  }

}
