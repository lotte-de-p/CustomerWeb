import { contactInfoStateFactory } from './contact-info.state.testfactory';
import { ContactInfo } from '@sales/order-configurator/contact-info/domain';

export interface ContactInfoState {
  contactInfo: ContactInfo;
}

export const defaultState: ContactInfoState = contactInfoStateFactory.build();
