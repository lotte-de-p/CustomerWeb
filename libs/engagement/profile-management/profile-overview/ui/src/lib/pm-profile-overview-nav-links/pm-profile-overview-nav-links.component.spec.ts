import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmProfileOverviewNavLinksComponent } from './pm-profile-overview-nav-links.component';
import { TranslateModule } from '@ngx-translate/core';
import { windowFactory } from '@telenet/ng-lib-page';

describe('PmProfileOverviewNavLinkComponent', () => {
  let component: PmProfileOverviewNavLinksComponent;
  let fixture: ComponentFixture<PmProfileOverviewNavLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PmProfileOverviewNavLinksComponent, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    });

    fixture = TestBed.createComponent(PmProfileOverviewNavLinksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly assign required inputs', () => {
    const testUrls = { memberMoreInfoLink: 'testUrl' };
    const testProfileOverview = { hasProfilePicture: true };

    fixture.componentRef.setInput('navLinkUrls', testUrls);
    fixture.componentRef.setInput('profileOverview', testProfileOverview);
    fixture.componentRef.setInput('isMember', true);

    expect(component.navLinkUrls()).toEqual(testUrls);
    expect(component.profileOverview()).toEqual(testProfileOverview);
    expect(component.isMember()).toBe(true);
  });

  describe('handleLinkClick', () => {
    it('should emit linkClick event when handleLinkClick is called', () => {
      const linkClickSpy = jest.spyOn(component.linkClick, 'emit');
      const testData = { type: 'testType', link: 'testLink' };

      component.handleLinkClick(testData);

      expect(linkClickSpy).toHaveBeenCalledWith(testData);
    });
  });

  describe('checkProductLinksVisibility', () => {
    it('should return true when URLs are present and user has permissions', () => {
      const testUrls = { easySwitchUrl: 'someUrl', invoiceSettingsUrl: 'anotherUrl' };
      const testProfileOverview = { canManageDtvProducts: true, canManageInternetProducts: true };
      fixture.componentRef.setInput('navLinkUrls', testUrls);
      fixture.componentRef.setInput('profileOverview', testProfileOverview);

      expect(component.checkProductLinksVisibility).toBe(true);
    });

    it('should return false when URLs are missing or user lacks permissions', () => {
      const testUrls = { easySwitchUrl: '', invoiceSettingsUrl: '' };
      const testProfileOverview = { canManageDtvProducts: false, canManageInternetProducts: false };
      fixture.componentRef.setInput('navLinkUrls', testUrls);
      fixture.componentRef.setInput('profileOverview', testProfileOverview);

      expect(component.checkProductLinksVisibility).toBe(false);
    });
  });

  describe('checkConnectivityOptionsVisibility', () => {
    it('should return true when URLs are present and user has permissions', () => {
      const testUrls = { wifiPasswordUrl: 'wifiUrl', simManagementPageUrl: 'simUrl' };
      const testProfileOverview = { canManageInternetProducts: true, canManageSimCards: true };

      fixture.componentRef.setInput('navLinkUrls', testUrls);
      fixture.componentRef.setInput('profileOverview', testProfileOverview);

      expect(component.checkConnectivityOptionsVisibility).toBe(true);
    });

    it('should return false when URLs are missing or user lacks permissions', () => {
      const testUrls = { wifiPasswordUrl: '', simManagementPageUrl: '' };
      const testProfileOverview = { canManageInternetProducts: false, canManageSimCards: false };

      fixture.componentRef.setInput('navLinkUrls', testUrls);
      fixture.componentRef.setInput('profileOverview', testProfileOverview);

      expect(component.checkConnectivityOptionsVisibility).toBe(false);
    });
  });
});
