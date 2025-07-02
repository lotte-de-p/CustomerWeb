import { ErrorRedirectUrlEnum } from '../enums/error.enum';

export interface ErrorObject {
  key: string;
  titleKey: string;
  descriptionKey: string;
  buttonTextKey: string;
  type: ErrorRedirectUrlEnum;
  stackTrace?: unknown;
  apiRequest?: string | null;
  description: string;
}
