import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-time-slot-skeleton',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './time-slot-skeleton.component.html',
  styles: [],
})
export class TimeSlotSkeletonComponent {}
