import { TimeslotMomentEnum } from '../enums';

export interface CallexcellRequestConfig {
  configuration: string;
  customer: string;
  language: string;
}

export interface CallexcellRequest {
  id: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  language: string;
  configuration: string;
  customer: string;
  subject: string;
  callback_datetime: string;
  recaptcha_token: string;
}

export interface CallexcellResponse {
  id: string;
  status: CallexcellResponseType;
  is_error: boolean;
  error_messages: string[];
}

export enum CallexcellResponseType {
  SUCCESS_SCHEDULED = 'success_scheduled',
  CALLBACK_EXISTS = 'callback_exists',
  SUCCESS_IMMEDIATE = 'success_immediate',
  FAILED = 'failed',
}

export interface CallexcellTimeslotResponse {
  is_active: boolean;
  status: string;
  is_error: boolean;
  timeslots: RawCallexcellTimeslot[];
}

export interface RawCallexcellTimeslot {
  start: string;
  end: string;
  enabled: boolean;
  date?: string;
  moment?: TimeslotMomentEnum;
}
