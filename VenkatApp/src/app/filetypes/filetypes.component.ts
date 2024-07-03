import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filetypes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filetypes.component.html',
  styleUrl: './filetypes.component.css'
})
export class FiletypesComponent {
  @Input() value = 0;
  @Input() name = "venkat";
  counter(val: number) {
    return Array.from(Array(val).keys());
  }
}
