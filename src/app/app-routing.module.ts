import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTalentComponent } from './list-talent/list-talent.component';
import { ViewTalentComponent } from './view-talent/view-talent.component';
import { CreateTalentComponent } from './create-talent/create-talent.component';
import { CreateMentorComponent } from './create-mentor/create-mentor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SaveTalentComponent } from './save-talent/save-talent.component';

const routes: Routes = [
  { path: 'list', component: ListTalentComponent },
  { path: 'view/:talentId', component: ViewTalentComponent },
  { path: 'save', component: SaveTalentComponent },
  { path: 'create-talent', component: CreateTalentComponent },
  { path: 'create-mentor', component: CreateMentorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

  //{ path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  //{ path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }