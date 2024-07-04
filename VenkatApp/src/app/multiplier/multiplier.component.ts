import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-multiplier',
  standalone: true,
  imports: [NgFor],
  templateUrl: './multiplier.component.html',
  styleUrl: './multiplier.component.css'
})
export class MultiplierComponent {
  @Input() times: number = 6;
  @Input() name: string = 'C';
  arr: number[] = [0];

  ngOnChanges(changes: SimpleChanges) {
    console.log('Multiplier ngOnChanges:', changes)
    while(this.arr.length < this.times)
      {
        this.arr.push(0);
      }
    while(this.arr.length > this.times)
      {
        this.arr.pop();
      }
  }
}
