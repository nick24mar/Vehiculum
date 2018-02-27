import { UserCredentials } from './../../../models/user-credentials';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../../services/user/auth.service';
import { User } from './../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(public fb: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  signUp() {
    const credentials: UserCredentials = {
      email: this.email.value,
      password: this.password.value
    };
    return this.authService.signupWithEmail(credentials, this.fullName);
  }

  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get fName() { return this.signUpForm.get('firstName'); }
  get lName() { return this.signUpForm.get('lastName'); }

  get fullName() {
    const fullName = this.fName.value + ' ' + this.lName.value;
    return fullName;
  }


  private initForm(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required]
      ]
    });
  }

}
