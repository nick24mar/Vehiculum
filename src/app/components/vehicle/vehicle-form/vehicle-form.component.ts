import { User } from './../../../models/user';
import { AuthService } from './../../../services/user/auth.service';
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../../services/vehicle/vehicles.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vehicle } from '../../../models/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup;
  user: User;
  done = false;

  constructor(
    private readonly vehicleSvc: VehiclesService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly auth: AuthService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }

  submitVehicle() {
    const data: Vehicle = this.vehicleForm.value;
    this.vehicleSvc.addVehicle(data)
      .then(() =>  {
        this.done = true;
        this.router.navigate(['/vehicles']);
      })
      .catch(err => console.log(err));
  }

  private initForm() {
    this.vehicleForm = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      caption: ['', Validators.required],
      price: ['0', Validators.required],
      speed: ['0', Validators.required],
      imgUrl: ['', Validators.required],
      isRegistered: [false, Validators.required]
    });
  }

}
