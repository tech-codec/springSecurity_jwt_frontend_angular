import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public mode:any=0;
public user!:any;
public lison:any='h';
public errorMessage!:string;
  constructor(private authservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  onRegister(userform: any) {
    this.authservice.adduser(userform)
      .subscribe((data:any)=>{
        this.user = data;
        this.mode=1;
      },(err:any)=>{
        this.errorMessage=err.error.message;
        this.mode=0;
      })
  }
}
