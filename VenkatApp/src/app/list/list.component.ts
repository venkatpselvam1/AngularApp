import { Component } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  transaction: string = ''
  transactions: number[] = [0, 1, 2];

  constructor(private transactionsService: TransactionsService){
    this.transactions = this.transactionsService.getTransactions();
  }
  deleteTransaction(i: number){
    alert('Deleting transaction ' + (i+1) +'\n' + this.transactions)
    this.transactions.splice(i, 1);
    alert('After delete \n' + this.transactions)
  }
  addTransaction(){
    this.transactions.push(parseInt(this.transaction));
  }
}
