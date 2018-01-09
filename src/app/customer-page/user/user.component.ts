import {Component, OnInit} from "@angular/core";
import {UsersService} from "./user.service";
import {User} from "./user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UsersService],
})


export class UserComponent implements OnInit {

  users: User[] = [];
  error: any;
  recervedUser: User;
  done: boolean = false;
  user: User = new User('', '', '', '', '', '', 0, false, '');

  sexList: String[] = ['Men', 'Women', 'It'];

  constructor(private usersService: UsersService) {
  }

  submit(user: User) {
    this.usersService.postUser(user)
      .subscribe(
        (data: User) => {
          this.recervedUser = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      data => this.users = data,
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
  }


}
