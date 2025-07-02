import { ComponentStep, NextButtonLabelEnum } from '@sales/shared/data-access';
import { DeliveryComponent } from '@sales/delivery/feat-delivery';
import { SummaryStepComponent } from '@sales/summary/feat-summary';
import { EtfComponent } from '@sales/etf/feat-etf';
import { ThankYouStepComponent } from '@sales/thank-you/feat-thank-you';
import { MissingDataComponent } from '@sales/hardware-checkout/feat-missing-data';

export const HardwareCheckoutSteps: ComponentStep[] = [
  {
    key: 'etf',
    component: EtfComponent,
  },
  {
    key: 'delivery',
    component: DeliveryComponent,
  },
  {
    key: 'missing-data',
    component: MissingDataComponent,
  },
  {
    key: 'summary',
    nextButtonLabel: NextButtonLabelEnum.ORDER,
    component: SummaryStepComponent,
  },
  {
    key: 'confirmation',
    component: ThankYouStepComponent,
  },
];
