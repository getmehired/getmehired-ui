import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router,Params} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  errorMessage:string='';
  successMessage:string='';
  email: string='';
  password:string='';

  constructor(
    public authService:AuthService,
    private router:Router,
    private fb:FormBuilder
  ) {
   this.createForm();
   }

   createForm(){
     this.registerForm=this.fb.group(
       {
         email:['',Validators.required],
         password:['',Validators.required]
       });   
   }

   tryRegister(value){
   //  window.alert("trying to regsiter:",this.email)
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = " ";
    })
  }


  ngOnInit() {
  }

}
