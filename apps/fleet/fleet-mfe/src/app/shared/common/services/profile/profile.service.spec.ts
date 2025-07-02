import { expect, jest } from '@jest/globals';
import { of } from 'rxjs';
import { FleetProfileMapper } from '../../mappers/profile/fleet-profile-mapper';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { TestBed } from '@angular/core/testing';
import { CustomerProductHoldingMapper } from '../../mappers/customer-product-holding/customer-product-holding.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { CreateFleetProfileConstants } from '../../constants/profile/create-fleet-profile-constants';

describe('ProfileService', () => {
  let profileService: ProfileService, ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, CustomerProductHoldingMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    profileService = TestBed.inject(ProfileService);
  });
  describe('validateFleetProfileIdentifier', () => {
    it('should validate identifier', (done) => {
      const ocapiCalled = jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({ success: true }));
      const mockMapper = new FleetProfileMapper();
      profileService
        .validateFleetProfileIdentifier('/end/point', CreateFleetProfileConstants.MESSAGE_GROUP, mockMapper)
        .subscribe((data) => {
          expect(data.success).toBeTruthy();
          expect(ocapiCalled).toHaveBeenCalled();
          done();
        });
    });
  });

  describe('getProfileDetailsByMsisdn', () => {
    it('should get the profile details', (done) => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of([]));

      profileService.getProfileDetailsByMsisdn('group-name', '0477777777').subscribe({
        next: () => {
          expect(ocapiService.doGet).toHaveBeenCalledWith(
            expect.objectContaining({
              messageGroupName: 'group-name',
              endpoint: '/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777',
            })
          );
          done();
        },
      });
    });
  });
});
