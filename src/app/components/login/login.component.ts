import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    user: '',
    password: '',
    role: '',
  }

  invalidCredentials = false;

  usersList: User[] = [];

  constructor(private database: FirestoreService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void {
    this.database.getCollection<User>('users').subscribe( (res) => {
      this.usersList = res;
    })
  }

  logIn(user: string, password: string) {
    this.usersList.forEach(element => {
      if (element.user === this.user.user && element.password === this.user.password) {
        localStorage.setItem('token', "6hrFDATxrG9w14QY9wwnmVhLE0Wg6LIvwOwUaxz761m1JfRp4rs8Mzozk5xhSkw0_MQz6bpcJnrFUDwp5lPPFC157dHxbkKlDiQ9XY3ZIP8zAGCsS8ruN2uKjIaIargX")
        this.router.navigate(['admin']);
      } else {
        this.invalidCredentials = true;
      }
    });
  }

}
