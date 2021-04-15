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
// getById
// getAll
  all(): Observable<Transfer[]>  {
    return this.httpClient.get<Transfer[]>(this.url);
  }
// post
  add(transfer: Transfer): Observable<Transfer> {
    this.addAttribute(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
  }
// update

// delete

  private addAttribute(transfer: any) {
    const myFormattedDate = new DatePipe('en-US').transform(Date.now(), 'shortDate');
    transfer.schedulingDate = myFormattedDate;
    }
}
