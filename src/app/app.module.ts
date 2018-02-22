import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehiclesService } from './services/vehicles.service';
import { VehicleFormComponent } from './components/vehicle/vehicle-form/vehicle-form.component';
import { AppRoutes } from './router/app.router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/vehicle/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleFormComponent,
    NavbarComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
