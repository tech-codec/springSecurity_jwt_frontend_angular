import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authservice: AuthenticationService, private router: Router) {
  }

  onlogout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }

  ongetTasks() {
    this.router.navigateByUrl("tasks");
  }
}

