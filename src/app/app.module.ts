import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTalentComponent } from './list-talent/list-talent.component';
import { TalentService } from './talent.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewTalentComponent } from './view-talent/view-talent.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTalentComponent,
    ViewTalentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
