import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileDetails } from './profile-details.model';

describe('ProfileDetails', () => {
  let profileDetails: ProfileDetails;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule],
    });

    profileDetails = new ProfileDetails();
  });

  describe('getRoleLabelKey', () => {
    it('should return formatted string if role is manager', () => {
      profileDetails.role = 'manager';
      const actual = profileDetails.getRoleLabelKey();
      expect(actual).toBe('ng.manage-users.txt.manager');
    });
    it('should return formatted string if role is member', () => {
      profileDetails.role = 'member';
      const actual = profileDetails.getRoleLabelKey();
      expect(actual).toBe('ng.manage-users.txt.member');
    });
    it('should return formatted string if role contract holder', () => {
      profileDetails.role = 'contract_holder';
      const actual = profileDetails.getRoleLabelKey();
      expect(actual).toBe('ng.manage-users.txt.contract_holder');
    });
    it('should return formatted string if role orphan', () => {
      profileDetails.role = 'orphan';
      const actual = profileDetails.getRoleLabelKey();
      expect(actual).toBe('ng.manage-users.txt.orphan');
    });
    it('should return empty string if no role is assigned', () => {
      profileDetails.role = '';
      const actual = profileDetails.getRoleLabelKey();
      expect(actual).toBe('');
    });
  });

  describe('isMember', () => {
    it('should return true if role is member', () => {
      profileDetails.role = 'member';
      const actual = profileDetails.isMember();
      expect(actual).toEqual(true);
    });
    it('should return false if role is not member', () => {
      profileDetails.role = 'manager';
      const actual = profileDetails.isMember();
      expect(actual).toEqual(false);
    });
    it('should return false if role is not member and is empty', () => {
      profileDetails.role = '';
      const actual = profileDetails.isMember();
      expect(actual).toEqual(false);
    });
  });

  describe('isManager', () => {
    it('should return true if role is manager', () => {
      profileDetails.role = 'manager';
      const actual = profileDetails.isManager();
      expect(actual).toEqual(true);
    });
    it('should return false if role is not manager', () => {
      profileDetails.role = 'member';
      const actual = profileDetails.isManager();
      expect(actual).toEqual(false);
    });
    it('should return false if role is not manager and is empty', () => {
      profileDetails.role = '';
      const actual = profileDetails.isManager();
      expect(actual).toEqual(false);
    });
  });

  describe('isContractHolder', () => {
    it('should return true if role is contract holder', () => {
      profileDetails.role = 'contract_holder';
      const actual = profileDetails.isContractHolder();
      expect(actual).toEqual(true);
    });
    it('should return false if role is not contract holder', () => {
      profileDetails.role = 'manager';
      const actual = profileDetails.isContractHolder();
      expect(actual).toEqual(false);
    });
    it('should return false if role is not contract holder and is empty', () => {
      profileDetails.role = '';
      const actual = profileDetails.isContractHolder();
      expect(actual).toEqual(false);
    });
  });

  describe('isOrphan', () => {
    it('should return true if role is orphan', () => {
      profileDetails.role = 'orphan';
      const actual = profileDetails.isOrphan();
      expect(actual).toEqual(true);
    });
    it('should return false if role is not orphan', () => {
      profileDetails.role = 'manager';
      const actual = profileDetails.isOrphan();
      expect(actual).toEqual(false);
    });
    it('should return false if role is not orphan and is empty', () => {
      profileDetails.role = '';
      const actual = profileDetails.isOrphan();
      expect(actual).toEqual(false);
    });
  });

  describe('getLanguageLabelKey', () => {
    it('should return formatted string if language is english', () => {
      profileDetails.language = 'en';
      const actual = profileDetails.getLanguageLabelKey();
      expect(actual).toBe('ng.manage-profile.lbl.language-english');
    });
    it('should return formatted string if language is french', () => {
      profileDetails.language = 'fr';
      const actual = profileDetails.getLanguageLabelKey();
      expect(actual).toBe('ng.manage-profile.lbl.language-french');
    });
    it('should return formatted string if language is dutch', () => {
      profileDetails.language = 'nl';
      const actual = profileDetails.getLanguageLabelKey();
      expect(actual).toBe('ng.manage-profile.lbl.language-dutch');
    });
    it('should return empty string if no language is assigned', () => {
      profileDetails.language = '';
      const actual = profileDetails.getLanguageLabelKey();
      expect(actual).toBe('');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
