import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  constructor(
    private http: HttpClient
  ) {}

  public helloWorld(){
    return "String from NG-Service";
  }

  public getHelloWorld() {
    return this.http.get('http://localhost:8080/hello');
  }
}
