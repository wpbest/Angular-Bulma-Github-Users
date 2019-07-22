import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { UserSignalComponent } from './user-signal/user-signal.component'

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: ':username',
    component: UserSignalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
