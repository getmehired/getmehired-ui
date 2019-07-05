import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTalentComponent } from './list-talent/list-talent.component';
import { TalentService } from './talent.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewTalentComponent } from './view-talent/view-talent.component';
import { CreateTalentComponent } from './create-talent/create-talent.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTalentComponent,
    ViewTalentComponent,
    CreateTalentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
