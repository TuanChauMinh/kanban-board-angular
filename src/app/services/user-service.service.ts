import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }

  createNewUser(firstname: string, lastname: string){
    return this.http.post<User>(this.userUrl, {firstname: firstname, lastname: lastname});
  }
  getAllUser(){
    return this.http.get<User>(this.userUrl);
  }

  getAllUserObservable() : Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
}
