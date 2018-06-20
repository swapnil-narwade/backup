import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(private userService: UserService,
              private counterService2: CounterService) {}

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    this.counterService2.IncrementToActive();

  }
  ngOnInit() {
  this.users = this.userService.inactiveUsers;
  }
}
