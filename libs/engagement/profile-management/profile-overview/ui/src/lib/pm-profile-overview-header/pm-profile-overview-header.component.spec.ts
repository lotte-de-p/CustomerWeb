import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmProfileOverviewHeaderComponent } from './pm-profile-overview-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfileOverview } from '@profile-management/data-access';
import { windowFactory } from '@telenet/ng-lib-page';

describe('PmProfileOverviewHeaderComponent', () => {
  let component: PmProfileOverviewHeaderComponent;
  let fixture: ComponentFixture<PmProfileOverviewHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PmProfileOverviewHeaderComponent, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(PmProfileOverviewHeaderComponent);
    component = fixture.componentInstance;

    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    fixture.componentRef.setInput('profilePictureUrl', '/url');
    fixture.componentRef.setInput('hasProfilePicture', true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should copy customer number to clipboard', () => {
    const mockProfileOverview: ProfileOverview = {
      customerNumber: '123456',
      role: 'Admin',
      firstName: 'John',
      lastName: 'Doe',
      canManageSimCards: true,
      canManageDtvProducts: true,
      canManageInternetProducts: true,
      hasProfilePicture: true,
    };

    fixture.componentRef.setInput('profileOverview', mockProfileOverview);

    const spy = jest.spyOn(navigator.clipboard, 'writeText').mockImplementation(() => Promise.resolve());

    component.copyToClipboard();

    expect(spy).toHaveBeenCalledWith(mockProfileOverview.customerNumber);
  });

  it('should emit linkClick event with correct parameters when trackLinkClick is called', () => {
    const event = new Event('click');
    jest.spyOn(event, 'preventDefault');
    jest.spyOn(component.linkClick, 'emit');

    fixture.componentRef.setInput('moreInfoLink', 'testLink');

    component.trackLinkClick(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.linkClick.emit).toHaveBeenCalledWith({ type: 'more-info', link: 'testLink' });
  });
});
