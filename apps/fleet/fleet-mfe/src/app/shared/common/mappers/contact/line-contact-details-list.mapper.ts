import { Injectable } from '@angular/core';
import { RawContactDetailsInterfaceData } from '../../interfaces/contact/raw-contact-details.interface';
import { ContactDetails } from '../../models/contact/contact-details.model';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { LineContactDetailsMapper } from './line-contact-details.mapper';

@Injectable({
  providedIn: 'root',
})
export class LineContactDetailsListMapper
  implements MapperInterface<RawContactDetailsInterfaceData[], ContactDetails[]>
{
  constructor(private readonly contactDetailsDataMapper: LineContactDetailsMapper) {}

  toModel(rawContactDetails: RawContactDetailsInterfaceData[]): ContactDetails[] {
    const contactDetailsList: ContactDetails[] = [];

    rawContactDetails.forEach((rawContact) =>
      contactDetailsList.push(this.contactDetailsDataMapper.toModel(rawContact))
    );

    return contactDetailsList;
  }
}
