import { LoginDetails } from '../models';

export interface LoginComponentInterface {
  initAfterLoggedIn(loginDetails?: LoginDetails): void;
}
