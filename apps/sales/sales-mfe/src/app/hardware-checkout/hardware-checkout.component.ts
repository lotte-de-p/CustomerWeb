import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { StepsNgrxModule } from '@sales/shared/data-access';
import { MissingDataComponent } from '@sales/hardware-checkout/feat-missing-data';
import { HardwareCheckoutSteps } from './constants/step.constants';
import { HardwareCheckoutConstants } from './constants/hardware-checkout.constants';
import { SalesStepperComponent } from '@sales/shared/feature-sales-stepper';
import { LoaderModule, LoaderService } from '@telenet/ng-lib-page';
import { CommonModule, NgIf } from '@angular/common';
import { EventFacade, EventInterface, EventsNgrxModule, EventTypeEnum } from '@sales/events/data-access';
import { HardwareCheckoutFacade } from './facades/hardware-checkout.facade';
import { combineLatest, Observable } from 'rxjs';
import { ChangeDeliveryInfoComponent, DeliveryComponent } from '@sales/delivery/feat-delivery';
import { SummaryStepComponent } from '@sales/summary/feat-summary';
import { HardwareCheckoutHelperService } from './services/hardware-checkout-helper.service';
import { AemInput, HardwareCheckoutNgrxModule, ViewState, ViewStateEnum } from '@sales/hardware-checkout/data-access';
import { ErrorComponent } from '@sales/error/feat-error';
import { EtfComponent } from '@sales/etf/feat-etf';
import { DeliveryNgrxModule } from '@sales/delivery/data-access';
import { SummaryNgrxModule } from '@sales/summary/data-access';
import { EtfNgrxModule } from '@sales/etf/data-access';
import { HardwareCheckoutDataLayerService } from './services/data-layer.service';
import { filter } from 'rxjs/operators';
import { ThankYouNgrxModule } from '@sales/thank-you/data-access';
import { ThankYouStepComponent } from '@sales/thank-you/feat-thank-you';
import { AddressFormFieldNgrxModule } from '@sales/address-form-field/data-access';

@Component({
  standalone: true,
  selector: 'tg-sales-hardware-checkout',
  templateUrl: './hardware-checkout.component.html',
  imports: [
    CommonModule,
    AddressFormFieldNgrxModule,
    StepsNgrxModule,
    HardwareCheckoutNgrxModule,
    EventsNgrxModule,
    DeliveryNgrxModule,
    SummaryNgrxModule,
    EtfNgrxModule,
    ThankYouNgrxModule,
    SalesStepperComponent,
    LoaderModule,
    NgIf,
    ChangeDeliveryInfoComponent,
    DeliveryComponent,
    SummaryStepComponent,
    ErrorComponent,
    EtfComponent,
    ThankYouStepComponent,
    MissingDataComponent,
  ],
})
@UntilDestroy()
export class HardwareCheckoutComponent implements OnInit {
  @Input() enableMask: boolean;
  @Input() enableLoader = true;
  @Input() pageType: string;
  @Input() customerServiceRedirectUrlInput: string | undefined;
  @Input() contactUsRedirectUrlInput: string | undefined;
  @Input() thankyouRedirectUrl: string | undefined;
  @Input() termsAndConditionsUrl: string | undefined;
  @Input() ingenicoFormUrl: string | undefined;

  viewState$: Observable<ViewState>;
  viewStateEnum = ViewStateEnum;
  isLoaded = false;

  componentSteps = HardwareCheckoutSteps;
  public readonly messageGroup = HardwareCheckoutConstants.MESSAGE_GROUP;

  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly eventFacade: EventFacade,
    private readonly loaderService: LoaderService,
    private readonly hardwareCheckoutHelperService: HardwareCheckoutHelperService,
    private readonly dataLayerService: HardwareCheckoutDataLayerService
  ) {
    this.viewState$ = this.hardwareCheckoutFacade.viewState$;
  }

  ngOnInit(): void {
    this.hardwareCheckoutFacade.setThankYouRedirectUrl(this.thankyouRedirectUrl);
    this.hardwareCheckoutFacade.setTermsAndConditionsUrl(this.termsAndConditionsUrl);
    this.hardwareCheckoutFacade.setIngenicoFormUrl(this.ingenicoFormUrl);
    this.loaderService.start();
    this.dataLayerService.setPageProperties();
    this.hardwareCheckoutFacade.setStartStepLoadTime();

    this.hardwareCheckoutFacade.stepEvent.pipe(untilDestroyed(this)).subscribe({
      next: (event: EventInterface<unknown> | undefined) => {
        if (event) {
          this.dataLayerService.handleAnalyticsEvent(event);
        }
      },
      error: (err) => console.error('Analytics issue ', err),
    });

    combineLatest([this.hardwareCheckoutFacade.stepEvent, this.hardwareCheckoutFacade.salesOrderState$])
      .pipe(
        this.filterOutAnalyticsEvents(),
        this.hardwareCheckoutHelperService.logDebug(),
        this.hardwareCheckoutHelperService.executeEventStrategy(),
        untilDestroyed(this)
      )
      .subscribe({
        next: (event: EventInterface) => {
          this.loaderService.stop();
          this.hardwareCheckoutHelperService.goToNextStepIfNeeded(event);
        },
        error: (error) => {
          this.handleError(error);
        },
      });

    this.setAemInputs();
    this.initialiseFlow();
  }

  nextButtonClickedEvent(): void {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'continue button clicked' });
  }

  private initialiseFlow() {
    try {
      this.hardwareCheckoutHelperService
        .initialiseFlow(this.componentSteps)
        .pipe(untilDestroyed(this))
        .subscribe({
          next: () => {
            this.isLoaded = true;
            this.loaderService.stop();
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
    this.loaderService.stop();
    this.hardwareCheckoutHelperService.setError(
      error,
      this.customerServiceRedirectUrlInput,
      this.contactUsRedirectUrlInput
    );
  }

  private setAemInputs() {
    const aemInputs: AemInput = {
      customerServiceRedirectUrlInput: this.customerServiceRedirectUrlInput,
      contactUsRedirectUrlInput: this.contactUsRedirectUrlInput,
      thankyouRedirectUrl: this.thankyouRedirectUrl,
    };
    this.hardwareCheckoutFacade.setAemInputs(aemInputs);
  }

  private filterOutAnalyticsEvents() {
    // @ts-expect-error need to declare salesOrderState here
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return filter(([stepEvent, salesOrderState]) => {
      return !stepEvent || stepEvent.eventType !== EventTypeEnum.ANALYTICS;
    });
  }
}
