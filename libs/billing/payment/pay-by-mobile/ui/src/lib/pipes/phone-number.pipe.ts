import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumber', standalone: true })
export class PhoneNumberPipe implements PipeTransform {
  transform(phoneNumber: string) {
    return phoneNumber.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
  }
}
