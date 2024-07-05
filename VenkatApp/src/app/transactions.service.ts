import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  getTransactions() {
    return [1,2,3,4,5,6,7,8,9,10]
  }
  constructor() { }
}
