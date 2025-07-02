import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberTransformService } from '../services/phone-number-transform.service';

@Pipe({ name: 'phoneNumber', standalone: true })
export class PhoneNumberPipe implements PipeTransform {
  constructor(private readonly phoneNumberTransformService: PhoneNumberTransformService) {}

  transform(phoneNumber: string | undefined): string {
    if (phoneNumber) {
      return this.transFormPhoneNumber(phoneNumber);
    }
    return '';
  }

  private transFormPhoneNumber(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }
    phoneNumber = phoneNumber.trim();
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
}
