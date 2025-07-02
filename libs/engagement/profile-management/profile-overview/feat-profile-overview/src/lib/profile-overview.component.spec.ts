import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProfileOverviewComponent } from './profile-overview.component';
import { CustomerProfileFacade } from '@profile-management/data-access';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService, windowFactory } from '@telenet/ng-lib-page';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProfileOverviewComponent', () => {
  let component: ProfileOverviewComponent;
  let fixture: ComponentFixture<ProfileOverviewComponent>;
  let customerProfileFacade: CustomerProfileFacade;
  let urlService: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProfileOverviewComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileOverviewComponent);
    component = fixture.componentInstance;
    customerProfileFacade = TestBed.inject(CustomerProfileFacade);
    urlService = TestBed.inject(UrlService);
    jest.spyOn(customerProfileFacade, 'sendNavLinkClickedEvent');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize profileOverview$ from customerProfileFacade', () => {
    expect(component.profileOverview$).toBe(customerProfileFacade.profileOverview$);
  });

  it('should call loadProfileOverview on initAfterLoggedIn', () => {
    const loginDetails = <LoginDetails>{ identityId: 'testId', isMember: () => true };
    const loadProfileOverviewSpy = jest.spyOn(customerProfileFacade, 'loadProfileOverview');

    component.initAfterLoggedIn(loginDetails);

    expect(loadProfileOverviewSpy).toHaveBeenCalledWith(loginDetails.identityId);
  });

  it('should call sendNavLinkClickedEvent on customerProfileFacade when handleLinkClick is called', () => {
    jest.spyOn(urlService, 'redirectTo');
    const data = { type: 'testType', link: 'testLink' };
    const isLink = true;

    component.handleLinkClick(data, isLink);

    expect(customerProfileFacade.sendNavLinkClickedEvent).toHaveBeenCalledWith(data.type, data.link, isLink);
    expect(urlService.redirectTo).toHaveBeenCalledWith(data.link);
  });

  it('should call reloadWindow on handleErrorAction', () => {
    const reloadWindowSpy = jest.spyOn(urlService, 'reloadWindow').mockImplementation(() => null);

    component.handleErrorAction();

    expect(reloadWindowSpy).toHaveBeenCalled();
  });
});
