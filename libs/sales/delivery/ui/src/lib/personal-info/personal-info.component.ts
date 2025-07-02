import { Component, Input } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { PersonalInfo } from '@sales/delivery/data-access';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, CommonModule, PhoneNumberPipe],
  selector: 'tg-sales-delivery-personal-info',
  templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent {
  @Input() personalInfo: PersonalInfo | null | undefined;
}
