import mockData from './rates.mock.json';
import { Country, Rate, RateDetailType, RatesOverview, RateType } from '../../index';

export interface RatesDataRaw {
  from_zone: string;
  to_zone: string;
  voice: RatesDetailRaw;
  sms: RatesDetailRaw;
  mms: RatesDetailRaw;
  data?: number;
  options: string;
}

export interface RateResponse {
  rates: RatesDataRaw[];
}

export interface RatesDetailRaw {
  received: number;
  outgoing: number;
  same_country?: number;
}

export const mockRates = mockData as RatesDataRaw[];

export const switzerland: Country = {
  country: 'Switzerland',
  iso: 'CH',
  region: 'EU',
  roamingZone: 'Europe_Special',
  internationalZone: 'Europe_Special',
};

const voiceRateToBelgium: Rate = {
  details: [
    { amount: 1.8, type: RateDetailType.OUTGOING },
    { amount: 0, type: RateDetailType.INCOMING },
  ],
  type: RateType.CALL,
};

const smsRateToBelgium: Rate = {
  details: [
    { amount: 0.5, type: RateDetailType.OUTGOING },
    { amount: 0, type: RateDetailType.INCOMING },
  ],
  type: RateType.SMS,
};

const mmsRateToBelgium: Rate = {
  details: [
    { amount: 1, type: RateDetailType.OUTGOING },
    { amount: 0, type: RateDetailType.INCOMING },
  ],
  type: RateType.MMS,
};

export const roamingRatesToBelgium: RatesOverview = {
  country: switzerland,
  toBelgium: true,
  rates: [voiceRateToBelgium, smsRateToBelgium, mmsRateToBelgium],
  options: 'option_voice_insideEU_pre',
};

export const anotherDestination: Country = {
  country: 'France',
  iso: 'FR',
  region: 'EU',
  roamingZone: 'ZoneEU',
  internationalZone: 'ZoneEU',
};

export const rawData = {
  from_zone: 'Europe_Special',
  to_zone: 'Belgium',
  brand: 'Telenet',
  category: 'Residential',
  voice: {
    received: 0.0,
    outgoing: 1.8,
    same_country: 1.0,
  },
  sms: {
    received: 0.0,
    outgoing: 0.5,
  },
  mms: {
    received: 0.0,
    outgoing: 1.0,
  },
  data: 0.1,
  options: 'option_voice_insideEU_pre',
};
