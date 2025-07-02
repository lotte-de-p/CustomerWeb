import { TransferPIDInterface } from '../interfaces/raw-profile-details.interface';
import { isEmpty } from 'lodash-es';

export class ProfileDetails {
  pid?: string;
  unverifiedphonenumber?: string;
  phonenumber?: string;
  identityRequestId?: string;
  role?: string;
  contactEmail?: string;
  language?: string;
  gender?: string;
  birthdate?: string;
  credentialAlias?: string;
  msisdns?: Array<string>;
  isInvitedProfile?: boolean;
  firstname?: string;
  lastname?: string;
  email?: string;
  privacysetting?: number;
  credential?: string;
  primarycredentialalias?: string;
  telenethosted?: boolean;
  legacylogin?: boolean;
  version?: number;
  status?: string;
  msisdn?: string[];
  nickname?: string;
  alias?: string[];
  itsMeId?: string;
  mailboxUUID?: string;
  mailboxAlias?: string[];
  transferPIDRequest?: TransferPIDInterface;
  age?: number;
  nccontactid?: string;
  contactid?: string;
  msisdnOnly?: boolean;

  getRoleLabelKey(): string {
    if (this.isManager()) {
      return 'ng.manage-users.txt.manager';
    } else if (this.isContractHolder()) {
      return 'ng.manage-users.txt.contract_holder';
    } else if (this.isMember()) {
      return 'ng.manage-users.txt.member';
    } else if (this.isOrphan()) {
      return 'ng.manage-users.txt.orphan';
    } else {
      return '';
    }
  }

  isMember(): boolean {
    return this.role !== undefined && !isEmpty(this.role) && this.role.toLowerCase() === 'member';
  }

  isContractHolder(): boolean {
    return this.role !== undefined && !isEmpty(this.role) && this.role.toLowerCase() === 'contract_holder';
  }

  isManager(): boolean {
    return this.role !== undefined && !isEmpty(this.role) && this.role.toLowerCase() === 'manager';
  }

  isOrphan(): boolean {
    return this.role !== undefined && !isEmpty(this.role) && this.role.toLowerCase() === 'orphan';
  }

  getLanguageLabelKey(): string {
    if (this.language !== undefined && !isEmpty(this.language)) {
      if (this.language.toLowerCase() === 'en') {
        return 'ng.manage-profile.lbl.language-english';
      } else if (this.language.toLowerCase() === 'fr') {
        return 'ng.manage-profile.lbl.language-french';
      } else if (this.language.toLowerCase() === 'nl') {
        return 'ng.manage-profile.lbl.language-dutch';
      }
    }
    return '';
  }
}
