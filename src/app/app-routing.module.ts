import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {RegistrationComponent} from './registration/registration.component';
import {TasksComponent} from "./tasks/tasks.component";
import {PageInactifComponent} from "./page-inactif/page-inactif.component";
import {AuthGardService} from "./services/auth-gard.service";

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"new-task", canActivate:[AuthGardService], component: NewTaskComponent},
  {path:"tasks",canActivate:[AuthGardService], component: TasksComponent},
  {path:"register",component: RegistrationComponent},
  {path:"not-foud", component: PageInactifComponent},
  {path:"**",redirectTo:"not-foud"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
