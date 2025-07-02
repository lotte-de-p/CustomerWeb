import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { AuthenticatorsMapper } from './authenticators.mapper';

describe('AuthenticatorsMapper', () => {
  let authenticatorsMapper: AuthenticatorsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatorsMapper, { provide: 'Window', useValue: {} }],
    });
    authenticatorsMapper = TestBed.inject(AuthenticatorsMapper);
  });

  describe('toModel', () => {
    it('should map authenticators obtained from api', () => {
      const authenticatorsMock = {
        authenticators: [
          { type: 'itsme', enabled: true, details: { enrollmentLink: 'link', factors: [{ id: 'ref' }] } },
        ],
        '2fa': { enabled: false },
      };
      const actual = authenticatorsMapper.toModel(authenticatorsMock);

      expect(actual.authenticators[0].type).toEqual('itsme');
      expect(actual.authenticators[0].enabled).toEqual(true);
      expect(actual.authenticators[0].enrollmentLink).toEqual('link');
    });

    it('should map authenticators obtained from api with enrollment link null', () => {
      const authenticatorsMock = { authenticators: [{ type: 'itsme', enabled: true }], '2fa': { enabled: false } };
      const actual = authenticatorsMapper.toModel(authenticatorsMock);

      expect(actual.authenticators[0].type).toEqual('itsme');
      expect(actual.authenticators[0].enabled).toEqual(true);
      expect(actual.authenticators[0].enrollmentLink).toEqual(null);
    });

    it('should map authenticators obtained from api with 2FA enabled', () => {
      const authenticatorsMock = { authenticators: [{ type: 'itsme', enabled: true }], '2fa': { enabled: true } };
      const actual = authenticatorsMapper.toModel(authenticatorsMock);

      expect(actual?.['2fa'].enabled).toEqual(true);
    });

    it('should map authenticators obtained from api with 2FA disabled', () => {
      const authenticatorsMock = { authenticators: [{ type: 'itsme', enabled: true }], '2fa': { enabled: false } };
      const actual = authenticatorsMapper.toModel(authenticatorsMock);

      expect(actual?.['2fa'].enabled).toEqual(false);
    });

    it('should map authenticators obtained from api with factors', () => {
      const authenticatorsMock = {
        authenticators: [
          { type: 'itsme', enabled: true, details: { enrollment_link: 'link', factors: [{ id: 'ref' }] } },
        ],
        '2fa': { enabled: false },
      };
      const actual = authenticatorsMapper.toModel(authenticatorsMock);

      expect(actual?.authenticators[0].factors?.[0].id).toEqual('ref');
    });

    it('should map authenticators obtained from api with factors undefined', () => {
      const authenticatorsMock = { authenticators: [{ type: 'itsme', enabled: true }], '2fa': { enabled: false } };
      const actual = authenticatorsMapper.toModel(authenticatorsMock);

      expect(actual?.authenticators[0].factors).toEqual(null);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
