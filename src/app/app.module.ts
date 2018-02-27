import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehiclesService } from './services/vehicle/vehicles.service';
import { VehicleFormComponent } from './components/vehicle/vehicle-form/vehicle-form.component';
import { AppRoutes } from './router/app.router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/vehicle/details/details.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthService } from './services/user/auth.service';
import { SignupComponent } from './components/user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleFormComponent,
    NavbarComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    MDBBootstrapModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(AppRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [VehiclesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
