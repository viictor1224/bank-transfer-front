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
  private transferWithoutFee: Transfer;

  constructor(private httpClient: HttpClient) {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }
  // getById
  getTransferById(id: number): Observable<Transfer> {
    return this.httpClient.get<Transfer>(`${this.url}/${id}`);
  }
  // getAll
  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }
  // post
  add(transfer: Transfer): Observable<Transfer> {
    this.addSchedulingDate(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
  }
  // update
  update(id: number, transfer: Transfer): Observable<Object> {
    const transferFields = { ...transfer };
    this.transferWithoutFee = {
      transferValue: transferFields.transferValue,
      originAccount: transferFields.originAccount,
      destinationAccount: transferFields.destinationAccount,
      transferDate: transferFields.transferDate,
    };
    return this.httpClient.put(`${this.url}/${id}`, this.transferWithoutFee);
  }
  // delete
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  private addSchedulingDate(transfer: any) {
    const myFormattedDate = new DatePipe('en-US').transform(
      Date.now(),
      'shortDate'
    );
    transfer.schedulingDate = myFormattedDate;
  }

}
