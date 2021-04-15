import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../models/transfer.model';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


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

  all(): Observable<Transfer[]>  {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transfer: Transfer): Observable<Transfer> {
    this.addAttribute(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  private addAttribute(transfer: any) {
    // formatDate(value: string | number | Date, format: string, locale: string, timezone?: string): string
    // formatDate(new Date(), shortDate, 'en-US');

    // transfer.schedulingDate = (new Date()).toLocaleString('en-US');



    const myFormattedDate = new DatePipe('en-US').transform(Date.now(), 'shortDate');

    transfer.schedulingDate = myFormattedDate;
    // transfer.schedulingDate = new Date();
  }
}
