import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CafeContactDetails } from './cafe-contact-details.model';
import { CafeContactDetailType } from '../enums/cafe-contact-detail-type';

describe('CafeContactDetails', () => {
  let cafeContactDetail: CafeContactDetails;

  beforeEach(() => {
    cafeContactDetail = new CafeContactDetails();
  });

  describe('isOrganization', function () {
    it('should return false when the contact is of type individual', function () {
      cafeContactDetail.type = CafeContactDetailType.INDIVIDUAL;
      expect(cafeContactDetail.isOrganization()).toBe(false);
    });

    it('should return true when the contact is of type organization', function () {
      cafeContactDetail.type = CafeContactDetailType.ORGANIZATION;
      expect(cafeContactDetail.isOrganization()).toBe(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
