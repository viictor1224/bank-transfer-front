import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Transfer } from '../models/transfer.model';
import { DatePipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

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
    return this.httpClient.get<Transfer>(`${this.url}/${id}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // getAll
  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // post
  add(transfer: Transfer): Observable<Transfer> {
    this.addSchedulingDate(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
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
    return this.httpClient.put(`${this.url}/${id}`, this.transferWithoutFee).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // delete
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  private addSchedulingDate(transfer: any) {
    const myFormattedDate = new DatePipe('en-US').transform(
      Date.now(),
      'shortDate'
    );
    transfer.schedulingDate = myFormattedDate;
  }

  errorHandler(error: HttpErrorResponse) {
    try {
      if (error.error.startsWith("Fee")) {
      window.alert(error.error)
      console.log(error.error);
      return throwError(error);}
    } catch (error) { }
    // console.log("another error input")

    var alertErrors = new String("");
    for (let i=0; i<error.error.length; i++) {
        alertErrors = alertErrors.concat(error.error[i].error+"\n")
    }
    if (alertErrors.length!=0) {
    console.log(alertErrors);
    window.alert(alertErrors);
    return throwError(error);
    }
    if (error.status==400) {
      console.log("bad request: please check your input fields");
      window.alert("bad request: please check your input fields");
      return throwError(error);
    }
  }
}
