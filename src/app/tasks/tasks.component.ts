import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks!: any;
  constructor(public authservice: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.ongetTasks();
  }

  ongetTasks(){
    this.authservice.getTasks()
      .subscribe((data:any)=>{
        this.tasks = data;
      },(err:any)=>{
        this.router.navigateByUrl("/login");
        this.authservice.logout();
      })
  }

  onNewTask() {
    this.router.navigateByUrl("/new-task");
  }

}
