import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'createdAt', 'updatedAt'];
  listUser : User[] = [];
  dataSource = new MatTableDataSource<User>(this.listUser);
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserObservable().subscribe((data) => {
        this.listUser = data;
        this.dataSource = new MatTableDataSource<User>(this.listUser);
    }, error => {
      console.log('error', error);
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

