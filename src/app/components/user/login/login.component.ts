import { UserCredentials } from './../../../models/user-credentials';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  loginWithEmail() {
    this.loading = true;

    const credentials: UserCredentials = {
      email: this.email.value,
      password: this.password.value
    };

    this.auth.loginWithEmail(credentials)
      .then(() => this.loading = !this.loading);
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  private getFromForm(value: string) {
    return this.loginForm.get(value);
  }

  get email() { return this.getFromForm('email'); }
  get password() { return this.getFromForm('password'); }
}
