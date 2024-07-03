import { Component } from '@angular/core';
import { FiletypesComponent } from '../filetypes/filetypes.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [FiletypesComponent],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  value = 0;
  name = "venkat";
}
