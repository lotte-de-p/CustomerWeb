import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-appointment-skeleton',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './appointment-skeleton.component.html',
  styles: [],
})
export class AppointmentSkeletonComponent {}
