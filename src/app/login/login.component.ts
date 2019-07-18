import { Component } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private router: Router,
  ) {
  }

  tryLogin(){
    this.authService.doLogin(this.email, this.password)
    .then(res => {
      this.router.navigate(['/list']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}