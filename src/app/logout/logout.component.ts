import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ACTION_LOGOUT } from '../store/actions/appActions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.user.logout().subscribe(data => {
      if (data.success) {
        this.router.navigate(['']);
        this.auth.setLoggedIn(false);
        this.user.updateState({
          action: ACTION_LOGOUT
        });
      } else {
        window.alert('Some problem');
      }
    });
  }

}
