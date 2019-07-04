import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTalentComponent } from './list-talent/list-talent.component';
import { ViewTalentComponent } from './view-talent/view-talent.component';


const routes: Routes = [
  { path: 'list', component: ListTalentComponent },
  { path: 'view/:talentId', component: ViewTalentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
