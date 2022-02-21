import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Transaction {
  id: number;
  date: Date;
  description: string;
  type: string;
  status:string;
  amount: number;
  postBalance: number;
}

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  endPoint = environment.server_url + environment.transactions_service_endpoint;
  
  constructor(private http:HttpClient) { }

  getTransactions(accountId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.endPoint+"/"+accountId);
  }

  addTransactions(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.endPoint+"/add", transaction);
  }
}
