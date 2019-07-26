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

  public listTalents() {
    const headers = {
      'idToken': localStorage.getItem('idToken')
    };

    return this.http.get('http://localhost:7000/api/talents', {headers});
  }

  public getTalent(talentId) {
    return this.http.get('http://localhost:7000/api/talents/'+talentId);
  }

}
