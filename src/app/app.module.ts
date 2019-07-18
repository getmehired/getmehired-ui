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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ListTalentComponent,
    SaveTalentComponent,
    ViewTalentComponent,
    CreateTalentComponent,
    LoginComponent,
    RegisterComponent,
    
   // TalentService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
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