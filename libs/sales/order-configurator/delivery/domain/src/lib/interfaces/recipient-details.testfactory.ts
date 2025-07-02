import { Factory } from 'fishery';
import { RecipientDetails } from '../interfaces/recipient-details.interface';

export const recipientDetailsTestfactory = Factory.define<RecipientDetails>(() => {
  return {
    firstname: 'The',
    lastname: 'Rock',
    mobile: '0485161623',
    email: 'the.rock@telenet.be',
  };
});
