import { OperationsService } from './../operations.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})
export class TransactionComponent implements OnInit {
  maxBalance : number = 2147483647;
  accountNumber: number = 3456789;
  result : any[]= []
  transactionAdded:boolean=false;
  submited:boolean=false;

  transactionFormGroup = new FormGroup ({
    amount: new FormControl('',[Validators.required, Validators.max(this.maxBalance)]),
    type: new FormControl('',[Validators.required]),
    description: new FormControl('')
  });

  constructor(private operationsService:OperationsService) { }

  ngOnInit(): void {
  }

  submitNumber(): void {
    //this.submitNumberOutput.emit(this.gbsuFtbLaiFormGroup.get('inputNumber').value);
    console.log(this.transactionFormGroup.value);
    let tt:any = {
      amount: this.transactionFormGroup.get('amount')?.value,
      type: this.transactionFormGroup.get('type')?.value,
      description: this.transactionFormGroup.get('description')?.value
    };
    this.operationsService.addTransactions(tt).subscribe(response => {
      this.submited = true;
      //TODO check data
      this.transactionAdded = response.status == "Accepted";

    },error => {
        console.log(error.message);
    });
    this.transactionFormGroup.reset();
  }

}
