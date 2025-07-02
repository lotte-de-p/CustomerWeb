import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmProfileOverviewNavLinkComponent } from './pm-profile-overview-nav-link.component';
import { TranslateModule } from '@ngx-translate/core';
import { windowFactory } from '@telenet/ng-lib-page';

describe('PmProfileOverviewNavLinkComponent', () => {
  let component: PmProfileOverviewNavLinkComponent;
  let fixture: ComponentFixture<PmProfileOverviewNavLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PmProfileOverviewNavLinkComponent, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    });

    fixture = TestBed.createComponent(PmProfileOverviewNavLinkComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('icon', 'user');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit linkClick event with correct parameters when trackLinkClick is called', () => {
    const event = new Event('click');
    jest.spyOn(event, 'preventDefault');
    jest.spyOn(component.linkClick, 'emit');

    fixture.componentRef.setInput('type', 'testType');
    fixture.componentRef.setInput('link', 'testLink');

    component.trackLinkClick(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.linkClick.emit).toHaveBeenCalledWith({ type: 'testType', link: 'testLink' });
  });
});
