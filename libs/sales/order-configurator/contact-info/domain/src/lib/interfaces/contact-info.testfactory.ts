import { Factory } from 'fishery';
import { ContactInfo } from './contact-info.interface';

export const contactInfoTestfactory = Factory.define<ContactInfo>(() => {
  return {
    firstName: 'The',
    lastName: 'Rock',
    email: 'the.rock@telenetgroup.be',
    phoneNumber: '0485222223',
  };
});
