import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ProfileDatalayerService } from './profile-datalayer.service';
import { jest } from '@jest/globals';
import { ManageSocialLoginConstants } from '../constants/manage-social-login.constant';

describe('ProfileDatalayerService', () => {
  let profileDatalayerService: ProfileDatalayerService;
  let dataLayerService: DataLayerService;

  const SELF_SERVICE_FLOW_STARTED = 'self-service flow started';
  const SELF_SERVICE_FLOW_START = 'self-service-flow-start';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [{ provide: 'Window', useValue: {} }],
    });
    profileDatalayerService = TestBed.inject(ProfileDatalayerService);
    dataLayerService = TestBed.inject(DataLayerService);
    profileDatalayerService.currentIntent = ManageSocialLoginConstants.DATALAYER_INTENT_UNLINK_SOCIAL_LOGIN;
  });

  describe('sendUnlinkSocialEvent', () => {
    it('should send event when unlinking social', () => {
      const eventSpy = jest.spyOn(dataLayerService, 'addEvent');
      profileDatalayerService.sendUnlinkSocialEvent();

      expect(dataLayerService.addEvent).toHaveBeenCalled();
      expect(eventSpy.mock.calls[0][0].getEventName()).toBe(SELF_SERVICE_FLOW_STARTED);
      expect(eventSpy.mock.calls[0][0].getType()).toBe(SELF_SERVICE_FLOW_START);
      expect(eventSpy.mock.calls[0][1].intent).toBe('unlink social login');
      expectEventProperties(eventSpy.mock.calls[0]);
    });
  });

  describe('sendUpdate2faStatusEvent', () => {
    it('should send event when updating the 2FA status', () => {
      const eventSpy = jest.spyOn(dataLayerService, 'addEvent');
      profileDatalayerService.sendUpdate2faStatusEvent();

      expect(dataLayerService.addEvent).toHaveBeenCalled();
      expect(eventSpy.mock.calls[0][0].getEventName()).toBe(SELF_SERVICE_FLOW_STARTED);
      expect(eventSpy.mock.calls[0][0].getType()).toBe(SELF_SERVICE_FLOW_START);
      expect(eventSpy.mock.calls[0][1].intent).toBe('update 2FA status');
      expectEventProperties(eventSpy.mock.calls[0]);
    });
  });

  describe('sendUnenrollFactorEvent', () => {
    it('should send event when unenrolling a factor', () => {
      const eventSpy = jest.spyOn(dataLayerService, 'addEvent');
      profileDatalayerService.sendUnenrollFactorEvent();

      expect(dataLayerService.addEvent).toHaveBeenCalled();
      expect(eventSpy.mock.calls[0][0].getEventName()).toBe(SELF_SERVICE_FLOW_STARTED);
      expect(eventSpy.mock.calls[0][0].getType()).toBe(SELF_SERVICE_FLOW_START);
      expect(eventSpy.mock.calls[0][1].intent).toBe('unenroll factor');
      expectEventProperties(eventSpy.mock.calls[0]);
    });
  });

  describe('sendNavLinkClickedEvent', () => {
    it('should call addEvent on dataLayerService when sendNavLinkClickedEvent is called', (done) => {
      const eventSpy = jest.spyOn(dataLayerService, 'addEvent');
      const itemType = 'testItem';
      const destinationUrl = 'testUrl';
      const isLink = true;

      profileDatalayerService.sendNavLinkClickedEvent(itemType, destinationUrl, isLink);

      expect(eventSpy).toHaveBeenCalled();
      done();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

// @ts-ignore
function expectEventProperties(eventSpyCall): void {
  expect(eventSpyCall[1].itemName).toBe('');
  expect(eventSpyCall[1].itemData).toBe('');
  expect(eventSpyCall[1].flowType).toBe('care');
  expect(eventSpyCall[2]?.getPrimaryCategory()).toBe('care');
  expect(eventSpyCall[2]?.getSubCategory1()).toBe('profile-management');
}
