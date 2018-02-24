import { UserCredentials } from './../../models/user-credentials';
import { User } from './../../models/user';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private userRef: AngularFirestoreDocument<User>;
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

      this.user = afAuth.authState.switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  signupWithEmail(credentials: UserCredentials, fullName: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => {
        this.setUserDoc(user, fullName);
        this.router.navigate(['/vehicles']);
      })
      .catch(error => this.handleError(error.message));
  }

  loginWithEmail(credentials: UserCredentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => this.router.navigate(['/vehicles']))
      .catch(error => this.handleError(error.message));
  }

  logoutUser() {
    return this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/login']))
      .catch(error => this.handleError(error.message));
  }

  updateUser(user: User, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data)
      .then(() => this.router.navigate(['/login']))
      .catch(error => this.handleError(error.message));
  }

  private setUserDoc(user, fullName: string) {
    this.userRef = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      fullName: fullName,
    };

    return this.userRef.set(data);
  }

  private handleError(errMsg) {
    console.log(errMsg);
  }
}
