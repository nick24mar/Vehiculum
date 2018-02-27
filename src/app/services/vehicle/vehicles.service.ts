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

  addVehicle(vehicle: Vehicle, user: User) {
    const data: Vehicle = {
      make: vehicle.make,
      model: vehicle.model,
      caption: vehicle.caption,
      price: vehicle.price,
      lastupdate: Date.now(),
      dateadded: Date.now(),
      isregistered: vehicle.isregistered,
      speed: vehicle.speed,
      imgUrl: vehicle.imgUrl,
      user: user
    };

    return this.vehicleCollection.add(data);
  }

  deleteVehicle(id: string) {
    this.vehicleDocument = this.afs.doc<Vehicle>(`vehicles/${id}`);

    return this.vehicleDocument.delete();
  }

}
