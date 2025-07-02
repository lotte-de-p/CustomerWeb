import { Component } from '@angular/core';
import { GeneralOverviewComponent } from '@connectivity/home-network/feature-general-overview';

@Component({
  templateUrl: './general-overview-local.component.html',
  standalone: true,
  imports: [GeneralOverviewComponent],
})
export class GeneralOverviewLocalComponent {}
