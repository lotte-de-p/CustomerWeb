import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { CustomerProfileState } from '../+state/customer-profile.state';
import {
  getAuthenticators,
  getProfileDetails,
  getProfileOverview,
  getSocialLogins,
  toggleActivateAction,
  toggleManageAction,
  unenrollFactor,
  unlinkSocialLogin,
  update2faStatus,
} from '../+state/customer-profile.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { ProfileDatalayerService } from '../infrastructure/profile-datalayer.service';
import { CustomerProfileFacade } from '../facade/customer-profile.facade';

describe('CustomerProfileFacade', () => {
  let mockStore$: MockStore<CustomerProfileState>;
  let facade: CustomerProfileFacade;
  let profileDatalayerService: ProfileDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OcapiService, provideMockStore(), CustomerProfileFacade, { provide: 'Window', useValue: window }],
    });

    mockStore$ = TestBed.inject(MockStore);
    facade = TestBed.inject(CustomerProfileFacade);
    profileDatalayerService = TestBed.inject(ProfileDatalayerService);

    jest.spyOn(profileDatalayerService, 'sendNavLinkClickedEvent');
    jest.spyOn(mockStore$, 'dispatch');
  });

  it('should dispatch getProfileDetails action to store', (done) => {
    facade.loadProfileDetails('', false);
    expect(mockStore$.dispatch).toHaveBeenCalledWith(getProfileDetails({ identityId: '', pidTransferRequest: false }));
    done();
  });

  it('should dispatch getProfileOverview and getProfilePicture action to store', (done) => {
    const identityId = '123456';
    facade.loadProfileOverview(identityId);

    expect(mockStore$.dispatch).toHaveBeenCalledWith(getProfileOverview({ identityId }));
    done();
  });

  it('should dispatch getSocialLogins action to store', (done) => {
    facade.loadSocialLogins();
    expect(mockStore$.dispatch).toHaveBeenCalledWith(getSocialLogins());
    done();
  });

  it('should dispatch unlinkSocialLogin action to store', (done) => {
    facade.unlinkSocialLogin('');
    expect(mockStore$.dispatch).toHaveBeenCalledWith(unlinkSocialLogin({ socialLoginType: '' }));
    done();
  });

  it('should call sendNavLinkClickedEvent on profileDatalayerService', (done) => {
    const itemName = 'testItem';
    const destinationUrl = 'testUrl';
    const isLink = true;

    facade.sendNavLinkClickedEvent(itemName, destinationUrl, isLink);

    expect(profileDatalayerService.sendNavLinkClickedEvent).toHaveBeenCalledWith(itemName, destinationUrl, isLink);
    done();
  });

  it('should dispatch getAuthenticators action to store', (done) => {
    facade.loadAuthenticators();
    expect(mockStore$.dispatch).toHaveBeenCalledWith(getAuthenticators());
    done();
  });

  it('should dispatch toggleActivate action to store', (done) => {
    facade.toggleActivate(true);
    expect(mockStore$.dispatch).toHaveBeenCalledWith(toggleActivateAction({ isToggleActivate: true }));
    done();
  });

  it('should dispatch toggleManage action to store', (done) => {
    facade.toggleManage(true);
    expect(mockStore$.dispatch).toHaveBeenCalledWith(toggleManageAction({ isToggleManage: true }));
    done();
  });

  it('on update2faStatus should call service', (done) => {
    facade.update2faStatus(true);
    expect(mockStore$.dispatch).toHaveBeenCalledWith(update2faStatus({ payload: true }));
    done();
  });

  it('on unenrollFactor should call service', (done) => {
    facade.unenrollFactor({ type: 'itsme', id: 'abc123' });
    expect(mockStore$.dispatch).toHaveBeenCalledWith(unenrollFactor({ factor: { type: 'itsme', id: 'abc123' } }));
    done();
  });
});
