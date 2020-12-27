import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'board'},
  {path:'create-user', component: CreateUserComponent},
  {path:'create-board', component:CreateBoardComponent},
  {path:'user-list', component:UserListComponent},
  {path:'board', component:BoardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
