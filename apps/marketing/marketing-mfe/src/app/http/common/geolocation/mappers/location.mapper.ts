import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationMapper implements MapperInterface<unknown, Location> {
  toModel(data: { postalCode: string; location: string }): Location {
    const location = new Location();
    location.postalCode = data.postalCode;
    location.location = data.location;
    return location;
  }
}
