import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';

const routes: Routes = [
  {path:'', redirectTo:'/createUser', pathMatch: 'full'},
  {path:'createUser', component: CreateNewUserComponent},
  {path:'listofUsers', component: ListOfUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
