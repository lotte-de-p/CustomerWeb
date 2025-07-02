import { makeFactory } from 'factory.ts';
import { ErrorObject } from './error.interface';
import { ErrorRedirectUrlEnum } from '../enums/error.enum';

export const errorObjectFactory = makeFactory<ErrorObject>({
  key: 'test-key',
  buttonTextKey: 'test-buttontext-key',
  titleKey: 'test-title-key',
  type: ErrorRedirectUrlEnum.CUSTOMER_SERVICE_REDIRECT_URL,
  descriptionKey: 'test-description-keyy',
  description: 'test-description',
});
