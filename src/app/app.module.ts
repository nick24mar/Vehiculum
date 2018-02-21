import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehiclesService } from './services/vehicles.service';
import { VehicleFormComponent } from './components/vehicle/vehicle-form/vehicle-form.component';
import { AppRoutes } from './router/app.router';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleFormComponent,
    NavbarComponent,
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
