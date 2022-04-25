import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  public tasksadd!:any;
  public mode: number=0;
  constructor(public authservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  addNewtask(formtask: any) {
    console.log(formtask);
    this.authservice.newTask(formtask)
      .subscribe((data:any)=>{
        this.tasksadd = data;
        this.mode = 1;
      },(err:any)=>{
        console.log(err);
      })
  }
}
