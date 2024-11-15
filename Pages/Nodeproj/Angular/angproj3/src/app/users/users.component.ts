import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.less'
})
export class UsersComponent {
  userList: any = []
  constructor(private userService: UserService) {
    userService.getUsers().subscribe(res => {
      this.userList = res
    })
  }


}
