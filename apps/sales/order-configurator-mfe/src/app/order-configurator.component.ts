import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentStep } from '@sales/shared/data-access';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SalesStepperComponent } from '@sales/shared/feature-sales-stepper';
import { OrderConfiguratorService } from './services/order-configurator.service';
import {
  OrderConfiguratorFacade,
  OrderConfiguratorNgrxModule,
} from '@sales/order-configurator/order-configurator-data-access';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { AddressNgrxModule } from '@sales/order-configurator/feat-installation-address';
import { AddressFormFieldNgrxModule } from '@sales/address-form-field/data-access';
import { InstallationTypeNgrxModule } from '@sales/order-configurator/installation-type/state';
import { DeliveryNgrxModule } from '@sales/order-configurator/delivery/state';
import { OrderNgrxModule } from '@sales/order-configurator/order/state';
import { ContactInfoNgrxModule } from '@sales/order-configurator/contact-info/state';

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    RouterModule,
    SalesStepperComponent,
    OrderConfiguratorNgrxModule,
    AddressNgrxModule,
    DeliveryNgrxModule,
    AddressFormFieldNgrxModule,
    OrderNgrxModule,
    ContactInfoNgrxModule,
    InstallationTypeNgrxModule,
  ],
  selector: 'tg-sales-order-configurator',
  templateUrl: './order-configurator.component.html',
})
@UntilDestroy()
export class OrderConfiguratorComponent implements OnInit {
  initialised = false;
  title = 'order-configurator-mfe';
  componentSteps: ComponentStep[] = [];
  errors$ = this.orderConfiguratorFacade.errors$;

  constructor(
    private readonly orderConfiguratorService: OrderConfiguratorService,
    private readonly orderConfiguratorFacade: OrderConfiguratorFacade
  ) {}

  ngOnInit(): void {
    this.preloadData();
    this.orderConfiguratorFacade.preLoading$
      .pipe(
        untilDestroyed(this),
        map((preLoading) => {
          if (!preLoading) {
            console.log('Preloading done');
            this.initialiseFlow();
          } else {
            console.log('Preloading...');
          }
        })
      )
      .subscribe();
  }

  private initialiseFlow() {
    try {
      this.orderConfiguratorService
        .initialiseFlow()
        .pipe(tap((componentSteps: ComponentStep[]) => (this.componentSteps = componentSteps)))
        .pipe(untilDestroyed(this))
        .subscribe({
          next: () => {
            this.initialised = true;
          },
          error: (error) => {
            this.handleError(error);
          },
        });
    } catch (error) {
      this.handleError(error as Error);
    }
  }

  private handleError(error: Error) {
    console.log('An error occurred', error);
  }

  private preloadData() {
    this.orderConfiguratorFacade.loadOfferFromUrl();
    this.orderConfiguratorFacade.loadCustomerAccount();
  }
}
