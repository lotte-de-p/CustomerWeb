import { inject, Injectable } from '@angular/core';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';

@Injectable({ providedIn: 'root' })
export class DisplayPhoneNumberService {
  private readonly phoneNumberTransformService = inject(PhoneNumberTransformService);

  formatPhoneNumber(phoneNumber: string): string {
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
}
