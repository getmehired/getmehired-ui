import { Component } from '@angular/core';
import { AuthService } from '../auth.service'
import { ProfileService } from '../profile.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../profile';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {

  errorMessage: string = '';

  email: string = '';
  password: string = '';
  

  constructor(
    public authService: AuthService,
    public profileService: ProfileService,
    private router: Router,
  ) {
  }

  tryLogin(){
    this.authService.doLogin(this.email, this.password)
    .then(res => {
      firebase.auth().currentUser.getIdToken(true).then((idToken) => {
        localStorage.setItem('idToken', idToken);
        // Check the profile to see whether it's already signed up or not
        this.profileService.checkProfile();
      });
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  

}
