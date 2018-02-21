
import { Routes } from '@angular/router';
import { VehicleComponent } from '../components/vehicle/vehicle.component';
import { VehicleFormComponent } from '../components/vehicle/vehicle-form/vehicle-form.component';
import { DetailsComponent } from '../components/vehicle/details/details.component';

export const AppRoutes: Routes = [
    { path: 'vehicles', component: VehicleComponent },
    { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
    { path: 'vehicles/new', component: VehicleFormComponent },
    { path: 'vehicles/view/:id', component: DetailsComponent },
];