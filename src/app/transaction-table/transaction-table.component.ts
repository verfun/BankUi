import { OperationsService } from './../operations.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';


export interface Transaction {
  id: number;
  date: Date;
  description: string,
  type: string;
  status: string;
  amount: number;
  postBalance: number
}



@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html'
})


export class TransactionTableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'date', 'description', 'type', 'amount','status' , 'postBalance'];
  //displayedColumns: string[] = ['id', 'name', 'weight', 'symbol', 'bal', 'date'];
  //dataSource = ELEMENT_DATA;
  dataSource:Transaction[] = [];
  accountId:number = 1

  constructor(private operationsService:OperationsService){}
  
  ngOnInit(): void {
    this.operationsService.getTransactions(this.accountId).subscribe(data => {
      //TODO check data
      this.dataSource = data;
    });
  }

}


