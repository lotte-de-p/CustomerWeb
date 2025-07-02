import { LanguageEnum } from '@telenet/ng-lib-page';
import { LineEnum } from '../enums/lines.enum';

export interface TimeslotRequestInterface {
  language: LanguageEnum;
  lines: LineEnum[];
  address: TimeslotAddressRequestInterface;
}

export interface TimeslotAddressRequestInterface {
  zip: string;
  city: string;
  street: string;
  nr: string;
  subHouseNr?: string;
  box?: string;
}
