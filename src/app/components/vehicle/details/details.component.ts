import { AuthService } from "./../../../services/user/auth.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VehiclesService } from "../../../services/vehicle/vehicles.service";
import { Vehicle } from "../../../models/vehicle";
import { User } from "../../../models/user";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  vehicleId: string;
  vehicle: Vehicle;

  currentUser: User;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly vehicleSvc: VehiclesService,
    public readonly auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.user.subscribe(user => this.currentUser = user);

    this.vehicleId = this.route.snapshot.paramMap.get("id");

    this.vehicleSvc
      .getVehicleById(this.vehicleId)
      .subscribe(v => (this.vehicle = v));
  }

  deleteVehicle() {
    this.vehicleSvc
      .deleteVehicle(this.vehicleId)
      .then(() => {
        console.log("successfully deleted");
        this.router.navigate(["/vehicles"]);
      })
      .catch(err => console.log(err));
  }
}
