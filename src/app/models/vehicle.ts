import { User } from './user';

export class Vehicle {
    $key?: string;
    imgUrl: string;
    make: string;
    model: string;
    captions: string;
    price: number;
    lastupdate: number;
    dateadded: number;
    isregistered: boolean;
    speed: number;
    user: User;
}
