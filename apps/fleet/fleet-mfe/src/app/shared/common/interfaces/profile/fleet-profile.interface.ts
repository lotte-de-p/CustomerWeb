import { ProfileImageInterface } from './profile-image.interface';

export interface FleetProfile {
  status?: string;
  firstname?: string;
  lastname?: string;
  language?: string;
  gender?: string;
  phonenumber?: string;
  email?: string;
  birthdate?: string;
  role?: string;
  msisdn?: string[];
  privacysetting?: number;
  pid?: string;
  alias?: string[];
  employeeCustomerNumber?: string;
  files?: ProfileImageInterface[];
  success?: boolean;
  identityid?: string;
  password?: string;
}
