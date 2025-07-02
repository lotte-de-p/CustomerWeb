export interface User {
  products: string[];
  customerNumber: string;
  type: string;
  username: string;
  password: string;
  mobile?: {
    phoneNumber?: string;
    nickname?: string;
    unassignedNumber?: string;
  };
  internet?: {
    productCode1?: string;
    productCode2?: string;
  };
  personal?: {
    firstName?: string;
    address1?: string;
    houseNumber?: string;
    subHouseNumber?: string;
    boxNumber?: string;
    ZIPCode?: string;
    city?: string;
    address2?: string;
    clientNumber1?: string;
    clientNumber2?: string;
  };
}

export function getUserByType(userType: string, users: User[]): User {
  for (const user of users) {
    if (user.type === userType) {
      return user;
    }
  }
  throw new Error(`User with userType ${userType} not found in ${users}`);
}
