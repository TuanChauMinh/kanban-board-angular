import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'create-user'},
  {path:'create-user', component: CreateUserComponent},
  {path:'register', component:RegisterComponent},
  {path:'create-board', component:CreateBoardComponent},
  {path:'user-list', component:UserListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
