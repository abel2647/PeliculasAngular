import { Component, OnInit } from '@angular/core';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-logged-in-user',
  templateUrl: './logged-in-user.component.html',
})
export class LoggedInUserComponent implements OnInit {
  user: any;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.loadRandomUser();
  }

  loadRandomUser() {
    this.randomUserService.getRandomUser().subscribe((user) => {
      this.user = user;
    });
  }
}
