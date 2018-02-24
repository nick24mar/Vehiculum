import { Vehicle } from './../../models/vehicle';
import { User } from '../../models/user';

import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehiclesService {
  private vehicleCollection: AngularFirestoreCollection<Vehicle>;
  private vehicleDocument: AngularFirestoreDocument<Vehicle>;

  private vehicle: Observable<Vehicle>;
  private vehicles: Observable<Vehicle[]>;

  constructor(private afs: AngularFirestore) {
    this.vehicleCollection = this.afs.collection('vehicles');
  }

  getVehicles() {
    return this.vehicles = this.vehicleCollection.snapshotChanges().map(action => {
      return action.map(a => {
        const data = a.payload.doc.data() as Vehicle;
        const id = a.payload.doc.id;

        return { id, ...data };
      });
    });
  }

  getVehicleById(id: string) {
    this.vehicleDocument = this.afs.doc<Vehicle>(`vehicles/${id}`);
    this.vehicle = this.vehicleDocument.valueChanges();

    return this.vehicle;
  }

  addVehicle(vehicle: Vehicle) {
    vehicle.lastupdate = Date.now();
    vehicle.dateadded = Date.now();

    return this.vehicleCollection.add(vehicle);
  }

  deleteVehicle(id: string) {
    this.vehicleDocument = this.afs.doc<Vehicle>(`vehicles/${id}`);

    return this.vehicleDocument.delete();
  }

}
