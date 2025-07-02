import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnDevicesOverviewComponent } from '@return-devices/feat-overview';

@Component({
  selector: 'tg-return-devices-local',
  standalone: true,
  imports: [CommonModule, ReturnDevicesOverviewComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
