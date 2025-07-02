import { TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect, jest } from '@jest/globals';
import { of } from 'rxjs';
import { GroupBundleRequestInterface } from '../../interfaces/bundle/group-bundle-request.interface';
import { PostRequestSuccessMapper } from '../../mappers/post-request-success-mapper';
import { BundleService } from './bundle.service';
import { BundleUsagesMapper } from '../../mappers/bundle/bundle-usages.mapper';

describe('BundleService', () => {
  let bundleService: BundleService;
  let ocapiService: OcapiService;
  const messageGroup = 'message-group';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    bundleService = TestBed.inject(BundleService);
  });

  describe('getBundleUsages', () => {
    it('should get bundle usages', (done) => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));
      bundleService.getBundleUsages(messageGroup, '1234').subscribe({
        next: () => {
          expect(ocapiService.doGet).toHaveBeenCalledWith(
            expect.objectContaining({
              messageGroupName: messageGroup,
              endpoint: `/public/api/fleet-billing-service/v1/accounts/1234/groupbundle/usages`,
              mapper: expect.any(BundleUsagesMapper),
            })
          );
          done();
        },
      });
    });
  });

  describe('addSubmitGroupBundles', () => {
    it('should submit group bundles', (done) => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 200 }));
      const body: GroupBundleRequestInterface = {
        billingAccountNumber: '123',
        offering: [{ externalProductCode: '7898798' }],
      };

      bundleService.addSubmitGroupBundles('message-group', body).subscribe(() => {
        expect(ocapiService.doPost).toHaveBeenCalledWith(
          expect.objectContaining({
            messageGroupName: 'message-group',
            endpoint: '/public/api/sales-service/v1/addsubmitgroupbundles',
            mapper: expect.any(PostRequestSuccessMapper),
            data: body,
          })
        );
        done();
      });
    });
  });

  describe('removeGroupBundles', () => {
    it('should remove group bundles', (done) => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 200 }));
      const body: GroupBundleRequestInterface = {
        billingAccountNumber: '123',
        offering: [{ externalProductCode: '7898798' }],
      };

      bundleService.removeGroupBundles('message-group', body).subscribe(() => {
        expect(ocapiService.doPost).toHaveBeenCalledWith(
          expect.objectContaining({
            messageGroupName: 'message-group',
            endpoint: '/public/api/sales-service/v1/removegroupbundles',
            mapper: expect.any(PostRequestSuccessMapper),
            data: body,
          })
        );
        done();
      });
    });
  });
});
