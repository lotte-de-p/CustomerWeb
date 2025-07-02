import { ProfileOverview } from './profile.overview.model';

describe('ProfileOverview', () => {
  let profileOverview: ProfileOverview;

  beforeEach(() => {
    profileOverview = new ProfileOverview();
  });

  describe('customerNumber', () => {
    it('should return the correct customer number when set', () => {
      const testCustomerNumber = '12345';
      profileOverview.customerNumber = testCustomerNumber;
      expect(profileOverview.customerNumber).toBe(testCustomerNumber);
    });

    it('should return undefined when customer number is not set', () => {
      expect(profileOverview.customerNumber).toBeUndefined();
    });
  });

  describe('role', () => {
    it('should return the correct role when set', () => {
      const testRole = 'admin';
      profileOverview.role = testRole;
      expect(profileOverview.role).toBe(testRole);
    });

    it('should return undefined when role is not set', () => {
      expect(profileOverview.role).toBeUndefined();
    });
  });
});
