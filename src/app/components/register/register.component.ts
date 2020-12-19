import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  newUser : User = new User();

  User: any = ['Super Admin', 'Author', 'Reader']
  constructor() {

  }


  ngOnInit(): void {
  }

  Register(form: NgForm){
    alert(this.newUser.username);
  }

}
