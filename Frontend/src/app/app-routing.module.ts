import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AluminiHomeComponent } from './alumini-home/alumini-home.component';
import { AluminiLoginComponent } from './alumini-login/alumini-login.component';
import { AluminiSignupComponent } from './alumini-signup/alumini-signup.component';

const routes: Routes = [{path:"alumini/signup",component:AluminiSignupComponent},
{path:"alumini/login",component:AluminiLoginComponent},
{path:"alumini/home",component:AluminiHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
