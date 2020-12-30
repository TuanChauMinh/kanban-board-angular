import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private userService: UserService) { }

  private boardUrl = 'http://localhost:3000/users';

  firstName: string;
  lastName: string;

  ngOnInit(): void {
  }

  CreateNewUser() {
    this.userService.createNewUser(this.firstName, this.lastName).subscribe({
      next: data => {
          this._snackBar.open("Created");
      },
      error: error => {
        this._snackBar.open("Falied");
      }
  })
  }
}
