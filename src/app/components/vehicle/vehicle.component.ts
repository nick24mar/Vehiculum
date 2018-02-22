import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Vehicle } from '../../models/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(
    private vehicleSvc: VehiclesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vehicleSvc.getVehicles()
      .subscribe(vehicle => {
        this.vehicles = vehicle
      });
  }

  navigate() {
    this.router.navigate(['/vehicles/new']);
  }

}
