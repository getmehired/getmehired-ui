import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTalentComponent } from './list-talent/list-talent.component';


const routes: Routes = [
  { path: 'list', component: ListTalentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
