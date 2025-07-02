import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { PhoneToGo } from '../interfaces/phone-to-go.interface';
import { RawPhoneToGoModelInterface, RawPhoneToGoUserModelInterface } from '../interfaces/raw-phone-to-go.interface';

@Injectable({
  providedIn: 'root',
})
export class PhoneToGoMapper implements MapperInterface<RawPhoneToGoModelInterface, PhoneToGo[]> {
  toModel(rawPhoneToGo: RawPhoneToGoModelInterface): PhoneToGo[] {
    return rawPhoneToGo.users.map((rawPhoneToGoUser) => {
      return this.toPhoneToGoNumbers(rawPhoneToGoUser);
    });
  }

  toPhoneToGoNumbers(rawPhoneToGoUser: RawPhoneToGoUserModelInterface): PhoneToGo {
    const isActive = rawPhoneToGoUser.emailAddress ? rawPhoneToGoUser.emailAddress.length > 0 : false;
    return {
      phoneNumber: rawPhoneToGoUser.phoneNumber,
      active: isActive,
    };
  }
}
