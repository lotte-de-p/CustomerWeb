import { LanguageEnum } from '@telenet/ng-lib-page';
import { TimeslotAddressRequestInterface, TimeslotRequestInterface } from './timeslot-request.interface';
import { LineEnum } from '../enums';

export class TimeslotAddressRequestInterfaceTestFactory {
  static build(properties?: unknown): TimeslotAddressRequestInterface {
    const timeslotAddressRequestInterface = {
      zip: '2800',
      city: 'Mechelen',
      street: 'Teststraat',
      nr: '2',
    };

    if (properties) {
      Object.keys(properties).forEach((key) => {
        timeslotAddressRequestInterface[key as keyof typeof timeslotAddressRequestInterface] =
          properties[key as keyof unknown];
      });
    }

    return timeslotAddressRequestInterface;
  }
}

export class TimeslotRequestInterfaceTestFactory {
  static build(properties?: unknown): TimeslotRequestInterface {
    const timeslotRequestInterface = {
      language: LanguageEnum.NL,
      lines: [LineEnum.INTERNET],
      address: TimeslotAddressRequestInterfaceTestFactory.build(
        properties && properties['address' as keyof unknown] ? properties['address' as keyof unknown] : []
      ),
    };

    if (properties) {
      delete properties['address' as keyof unknown];

      Object.keys(properties).forEach((key) => {
        timeslotRequestInterface[key as keyof unknown] = properties[key as keyof unknown];
      });
    }

    return timeslotRequestInterface;
  }
}
