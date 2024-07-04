import { Component } from '@angular/core';
import { MultiplierComponent } from '../multiplier/multiplier.component';
import { ChooserComponent } from '../chooser/chooser.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MultiplierComponent, ChooserComponent, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  times: number = 3;
  name: string = 'VV';
}
