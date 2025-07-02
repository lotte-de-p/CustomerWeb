import { ProfileImage } from './profile-image';

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
  files?: ProfileImage[];
  success?: boolean;
  identityid?: string;
  password?: string;
}
