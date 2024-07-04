import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chooser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chooser.component.html',
  styleUrl: './chooser.component.css'
})
export class ChooserComponent {
  @Input() times: number = 3;
  @Output() timesChange = new EventEmitter<number>();

  @Input() name: string = '';
  @Output() nameChange = new EventEmitter<string>();
  
  onTimeInputChange() {
    this.timesChange.emit(this.times);
  }
  onNameInputChange() {
    this.nameChange.emit(this.name);
  }
}
