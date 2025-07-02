import { ComponentStep } from '@sales/shared/data-access';
import { StepInstallationAddressComponent } from '../steps/installation-address/components/step-installation-address.component';
import { StepInstallationTypeComponent } from '../steps/installation-type/components/step-installation-type.component';
import { StepDeliveryComponent } from '../steps/delivery/components/step-delivery.component';
import { StepSummaryComponent } from '../steps/summary/components/step-summary.component';
import { StepThanksComponent } from '../steps/thanks/components/step-thanks.component';
import { StepEasySwitchSelectionComponent } from '../steps/easy-switch-selection/components/step-easy-switch-selection.component';
import { StepAppointmentComponent } from '../steps/appointment/components/step-appointment.component';
import { StepEasySwitchConfigurationComponent } from '../steps/easy-switch-configuration/components/step-easy-switch-configuration.component';

export const stepConfig: ComponentStep[] = [
  {
    key: 'installation-address',
    component: StepInstallationAddressComponent,
  },
  {
    key: 'installation-type',
    component: StepInstallationTypeComponent,
  },
  {
    key: 'appointment',
    component: StepAppointmentComponent,
  },
  {
    key: 'delivery',
    component: StepDeliveryComponent,
  },
  {
    key: 'easy-switch-selection',
    component: StepEasySwitchSelectionComponent,
  },
  {
    key: 'easy-switch-configuration',
    component: StepEasySwitchConfigurationComponent,
  },
  {
    key: 'summary',
    component: StepSummaryComponent,
  },
  {
    key: 'thanks',
    component: StepThanksComponent,
  },
];
