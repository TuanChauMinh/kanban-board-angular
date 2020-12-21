import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userUrl = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }

  createNewUser(newUser: User){
    return this.http.post<User>(this.userUrl, {firstname: newUser.firstName, lastname:newUser.lastName});
  }
  getAllUser(){
    return this.http.get<User>(this.userUrl);
  }
}
