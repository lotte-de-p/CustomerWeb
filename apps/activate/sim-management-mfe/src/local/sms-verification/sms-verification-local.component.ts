import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsVerificationComponent } from '@sim-management/feat-sms-verification';

@Component({
  selector: 'tg-sim-management-sms-verification-local',
  standalone: true,
  imports: [CommonModule, SmsVerificationComponent],
  templateUrl: './sms-verification-local.component.html',
})
export class SmsVerificationLocalComponent {}
