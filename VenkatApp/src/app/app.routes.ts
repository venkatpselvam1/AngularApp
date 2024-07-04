import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'account', component: AccountComponent },
];
