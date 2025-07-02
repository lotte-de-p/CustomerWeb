import { Component } from '@angular/core';
import { MobileBarringsComponent } from '@billing/mobile-barrings/feat-mobile-barrings';

@Component({
  selector: 'customer-web-billing-barrings-local-app',
  standalone: true,
  imports: [MobileBarringsComponent],
  templateUrl: './barrings-mfe-mobile-container.component.html',
})
export class BarringsMfeMobileContainerComponent {}
