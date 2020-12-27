import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BoardListDropdownComponent } from './components/board-list-dropdown/board-list-dropdown.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { BoardComponent } from './components/board/board.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CardComponent } from './components/card/card.component';
import { BoardService } from './services/board-service.service';
import { TaskService } from './services/task-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateBoardComponent,
    UserListComponent,
    BoardListDropdownComponent,
    CreateUserComponent,
    BoardComponent,
    TaskListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BoardService, TaskService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
