import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'account', component: AccountComponent },
    { path: 'list', component: ListComponent },
];
