import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpecificationsService {
  public retrieveAllSpecData(mappedSpec): string {
    let volumeForLabel = '';
    for (let service = 0; service < mappedSpec.services.length; service++) {
      volumeForLabel += this.readServiceSpecificationData(mappedSpec.services[service]);
      if (service !== mappedSpec.services.length - 1) {
        volumeForLabel += '/';
      }
    }
    return volumeForLabel;
  }

  private readServiceSpecificationData(service): string {
    let serviceSpecification = '';
    for (let spec = service.specifications.length - 1; spec >= 0; spec--) {
      serviceSpecification +=
        service.specifications[spec].value + service.specifications[spec].unit.replace('minuten', 'min');
      if (spec === service.specifications.length - 1 && spec !== 0) {
        serviceSpecification += '/';
      }
    }
    return serviceSpecification;
  }
}
