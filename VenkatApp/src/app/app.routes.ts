import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'account', component: AccountComponent },
    { path: 'list', component: ListComponent },
    { path: 'list2', component: List2Component },
];
