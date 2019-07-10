import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTalentComponent } from './list-talent/list-talent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveTalentComponent } from './save-talent/save-talent.component';
import { ViewTalentComponent } from './view-talent/view-talent.component';
import { CreateTalentComponent } from './create-talent/create-talent.component';
@NgModule({
  declarations: [
    AppComponent,
    ListTalentComponent,
    SaveTalentComponent,
    ViewTalentComponent,
    CreateTalentComponent,
    
   // TalentService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
     // { path: '', component: AppComponent },
      { path: 'list', component: ListTalentComponent },
      { path: 'save', component: SaveTalentComponent },
      { path: 'view', component: ViewTalentComponent },
      { path: 'view/:talentId', component: ViewTalentComponent },
      { path: 'create', component: CreateTalentComponent }
      
      
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
