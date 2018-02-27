import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicle/vehicles.service';
import { Vehicle } from '../../models/vehicle';
import { Router } from '@angular/router';
import { AuthService } from '../../services/user/auth.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];
  isLoggedIn: boolean;

  constructor(
    private vehicleSvc: VehiclesService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.vehicleSvc.getVehicles()
      .subscribe(vehicle =>
        this.vehicles = vehicle);

    this.auth.user.subscribe(user =>
      this.isLoggedIn = user ? true : false);
  }
  navigate() {
    this.router.navigate(['/vehicles/new']);
  }

}
