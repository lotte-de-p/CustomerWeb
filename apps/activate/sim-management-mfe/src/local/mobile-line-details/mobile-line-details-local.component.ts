import { Component } from '@angular/core';
import { MobileLineDetailsComponent } from '@sim-management/feat-mobile-line-details';

@Component({
  selector: 'tg-sim-management-mobile-line-details-local',
  standalone: true,
  templateUrl: './mobile-line-details-local.component.html',
  imports: [MobileLineDetailsComponent],
})
export class MobileLineDetailsLocalComponent {}
