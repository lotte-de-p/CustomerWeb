export interface RawPhoneToGoModelInterface {
  groupName: string;
  activationDate: string;
  users: RawPhoneToGoUserModelInterface[];
}

export interface RawPhoneToGoUserModelInterface {
  userId: string;
  extension: string;
  phoneNumberType: string;
  nickName: string;
  phoneNumber: string;
  emailAddress: string;
  language: string;
}
