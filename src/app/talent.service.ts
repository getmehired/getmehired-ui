import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {SaveTalentComponent} from './app-save-talent.component';

// Other imports for post
import { HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';
import {  HttpErrorResponse } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class TalentService {
    public talentinfo;
  constructor(private http:HttpClient ) { 
      //this.talentinfo=this.savetalent.talentform;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
 public  printHello(){
    return "Hello Orni";  }

 
  public  listTalents() {
     return this.http.get('/assets/talent_list.json');
    }
  public  getTalents() {
      return this.http.get('http://localhost:7000/api/talents');
      }

  public  getTalentbyId(talentId) {
        return this.http.get('http://localhost:7000/api/talents/'+talentId);
        }
  public saveTalent(t){
    this.talentinfo=t;
    console.log("the talent is :",this.talentinfo);
    //alert("the talent is :"+this.talentinfo);
    return this.http.post('http://localhost:8080/api/talents/',t, httpOptions);
  }

  public deleteTalent(talentId){
    return   this.http.delete('http://localhost:7000/api/talents/'+talentId);
  }
  
}


