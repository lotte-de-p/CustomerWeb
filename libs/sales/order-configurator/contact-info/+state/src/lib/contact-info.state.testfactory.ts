import { ContactInfoState } from './contact-info.state';
import { Factory } from 'fishery';
import { contactInfoTestfactory } from '@sales/order-configurator/contact-info/domain';

export const contactInfoStateFactory = Factory.define<ContactInfoState>(() => {
  return { contactInfo: contactInfoTestfactory.build() };
});
