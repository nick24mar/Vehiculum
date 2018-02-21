
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehiclesService {
  private vehicleCollection: AngularFirestoreCollection<Vehicle>;
  private vehicles: Observable<Vehicle[]>;

  constructor(private afs: AngularFirestore) {
    this.initVehicleDb();
  }

  getVehicles() {
    return this.vehicles;
  }

  addVehicle(vehicle: Vehicle) {
    vehicle.lastupdate = Date.now();
    vehicle.dateadded = Date.now();
    return this.vehicleCollection.add(vehicle);
  }

  private initVehicleDb() {
    this.vehicleCollection = this.afs.collection('vehicles');
    this.vehicles = this.vehicleCollection.snapshotChanges().map(action => {
      return action.map(a => {
        const data = a.payload.doc.data() as Vehicle;
        const id = a.payload.doc.id;

        return { id, ...data };
      })
    })
  }

}
