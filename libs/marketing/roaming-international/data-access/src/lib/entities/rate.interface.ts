import { Country, initCountry } from './country-list.interface';

export interface Rate {
  type: RateType;
  details: RateDetail[];
}

export interface RateDetail {
  type: RateDetailType;
  amount: number;
}

export enum RateType {
  SMS = 'SMS',
  MMS = 'MMS',
  CALL = 'CALL',
  DATA = 'DATA',
}

export enum RateDetailType {
  INCOMING = 'INCOMING',
  OUTGOING = 'OUTGOING',
  VOLUME = 'VOLUME',
}

export interface RatesOverview {
  rates: Rate[];
  country: Country;
  toBelgium: boolean;
  options: string;
}

export const initRate: Rate = {
  type: RateType.SMS,
  details: [],
};

export const initRatesOverview: RatesOverview = {
  rates: [],
  country: initCountry,
  toBelgium: true,
  options: '',
};
