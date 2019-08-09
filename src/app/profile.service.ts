import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';
import { Router, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  public getProfile() {
    const headers = {
      'idToken': localStorage.getItem('idToken')
    };

    return this.http.get('http://18.225.22.182:7000/api/profiles/me', {headers});
  }

  checkProfile(){
    this.getProfile().subscribe(
      response => this.profileBasedRouting(<Profile>response),
      err => new Profile(),
      () => console.log('Observer got a complete notification')
    );
  }

  profileBasedRouting(profile){
     console.log("Profile object from service", profile);
     if(profile.talent){
      console.log("it's a talent profile", profile);
     }
     else if(profile.mentor){
      console.log("it's a mentor profile");
     }
     else{
       console.log("We should go to wizard");
       this.router.navigate(['/create']);
     }
  }


}
