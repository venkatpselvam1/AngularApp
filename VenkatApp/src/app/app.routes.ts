import { Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AccountsComponent} from './accounts/accounts.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'account', component: AccountsComponent },
];


