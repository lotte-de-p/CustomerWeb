import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-return-devices-skeleton',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './return-devices-skeleton.component.html',
  styles: [],
})
export class ReturnDevicesSkeletonComponent {}
