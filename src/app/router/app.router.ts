
import { Routes } from '@angular/router';
import { VehicleComponent } from '../components/vehicle/vehicle.component';
import { VehicleFormComponent } from '../components/vehicle/vehicle-form/vehicle-form.component';

export const AppRoutes: Routes = [
    { path: 'vehicles', component: VehicleComponent },
    { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
    { path: 'vehicles/new', component: VehicleFormComponent }
];