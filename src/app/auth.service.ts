import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
   public afAuth: AngularFireAuth
 ){}

  doRegister(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  doLogin(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  doLogout(){
    return this.afAuth.auth.signOut();
  }

}