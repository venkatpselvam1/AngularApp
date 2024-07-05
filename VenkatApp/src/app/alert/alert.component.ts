import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() indToDelete: number = 0
  @Output() onDeleteConfirm: EventEmitter<any> = new EventEmitter<any>();
  delete(){
    this.onDeleteConfirm.emit(this.indToDelete);
  }
  close(){
    alert('closing')
  }
}
