import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../../../services/vehicles.service';
import { Vehicle } from '../../../models/vehicle';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  vehicleId: string;
  vehicle: Vehicle;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly vehicleSvc: VehiclesService
  ) {
    this.vehicleId = route.snapshot.paramMap.get('id');
    
    console.log(this.vehicleId);
  }

  ngOnInit() {
    this.vehicleSvc.getVehicle(this.vehicleId)
      .subscribe(v => this.vehicle = v);
  }

}
