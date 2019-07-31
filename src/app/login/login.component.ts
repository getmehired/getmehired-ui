import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router,Params} from '@angular/router';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage:string='';


  constructor(
    public authService:AuthService,
    private router:Router,
    private fb:FormBuilder
  ) { 
    this.createForm();
  }

  createForm(){
    this.loginForm=this.fb.group(
      {
        email:['',Validators.required],
        password:['',Validators.required]
      });
  }



  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      firebase.auth().currentUser.getIdToken(true).then((idToken) => {
        localStorage.setItem('idToken', idToken);
        this.router.navigate(['/list']);
    })
 }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }


  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/list']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/list']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/list']);
    })
  }

  ngOnInit() {
  }

}