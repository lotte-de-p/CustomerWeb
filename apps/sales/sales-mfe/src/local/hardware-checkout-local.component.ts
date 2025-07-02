import { Component } from '@angular/core';
import { HardwareCheckoutComponent } from '../app/hardware-checkout/hardware-checkout.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

export enum SalesModeEnum {
  Hardware,
  Internet,
}

@Component({
  standalone: true,
  selector: 'tg-sales-hardware-checkout-local',
  imports: [HardwareCheckoutComponent, NgIf],
  templateUrl: './hardware-checkout-local.component.html',
})
export class HardwareCheckoutLocalComponent {
  title = 'sales-mfe';
  mode: SalesModeEnum;

  constructor(private readonly route: ActivatedRoute) {
    this.mode = this.route.snapshot.data['mode'];
  }

  protected readonly SalesModeEnum = SalesModeEnum;
}
