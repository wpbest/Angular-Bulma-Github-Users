import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-signal',
  templateUrl: './user-signal.component.html',
  styleUrls: ['./user-signal.component.scss']
})
export class UserSignalComponent implements OnInit {
  user; // property to hold our user when we eventually grab them from github api

  // inject the things we need
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
    });    
  }

}
