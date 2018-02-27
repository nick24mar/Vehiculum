import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/user/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService) {
    this.auth.user.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  signOutUser() {
    return this.auth.logoutUser();
  }
}
