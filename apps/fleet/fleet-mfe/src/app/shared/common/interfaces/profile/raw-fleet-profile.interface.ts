import { RawProfileImageInterface } from './raw-profile-image.interface';

export interface RawFleetProfile {
  status?: string;
  firstName?: string;
  lastName?: string;
  language?: string;
  gender?: string;
  phone?: string;
  email?: string;
  birthDate?: string;
  role?: string;
  msisdn?: string[];
  privacysetting?: number;
  pid?: string;
  alias?: string[];
  employeeCustomerNumber?: string;
  files?: RawProfileImageInterface[];
  success?: boolean;
  identityid?: string;
  password?: string;
}
