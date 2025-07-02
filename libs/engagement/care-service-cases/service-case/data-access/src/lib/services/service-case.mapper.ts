import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { ServiceCase, Status, Type } from '../entitities/service-case.interface';
import { RawServiceCase } from '../entitities/raw.service-case.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceCaseMapper implements MapperInterface<RawServiceCase[], ServiceCase[]> {
  toModel(data: RawServiceCase[]): ServiceCase[] {
    return data.map((raw) => ({
      id: raw.id,
      status: Status[raw.status.toUpperCase() as keyof typeof Status],
      type: Type[raw.type.toUpperCase() as keyof typeof Type],
      creationDate: new Date(raw.creationDate),
      deadlineDate: raw.deadlineDate ? new Date(raw.deadlineDate) : undefined,
      productType: raw.productType,
    }));
  }
}
