import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../models/transfer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transfersList: any[];
  private url = 'http://localhost:8080/schedules';

  constructor(private httpClient: HttpClient) {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transfer: any) {
    this.addAttribute(transfer);

    this.transfers.push(transfer);
  }

  private addAttribute(transfer: any) {
    transfer.scheduling__date = new Date();
  }
}
