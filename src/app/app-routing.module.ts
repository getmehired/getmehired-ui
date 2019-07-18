import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTalentComponent } from './list-talent/list-talent.component';
import { ViewTalentComponent } from './view-talent/view-talent.component';
import { CreateTalentComponent } from './create-talent/create-talent.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListTalentComponent },
  { path: 'view/:talentId', component: ViewTalentComponent },
  { path: 'create', component: CreateTalentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
