import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';

@Pipe({
  name: 'phoneNumber',
  standalone: true,
})
export class PhoneNumberPipe implements PipeTransform {
  constructor(private readonly phoneNumberTransformService: PhoneNumberTransformService) {}

  transform(phoneNumber: string) {
    return this.transFormPhoneNumber(phoneNumber);
  }

  private transFormPhoneNumber(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }
    phoneNumber = phoneNumber.trim();
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
}
