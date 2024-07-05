import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-list2',
  standalone: true,
  imports: [FormsModule, NgFor, AlertComponent],
  templateUrl: './list2.component.html',
  styleUrl: './list2.component.css'
})
export class List2Component {
  indToDelete: number = 0
  transaction: string = ''
  transactions: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  deleteTransaction(i: number){
    this.indToDelete = i;
  }

  removeFromUI(i: number){
    this.transactions.splice(i, 1);
  }
  addTransaction(){
    this.transactions.push(parseInt(this.transaction));
  }
}
