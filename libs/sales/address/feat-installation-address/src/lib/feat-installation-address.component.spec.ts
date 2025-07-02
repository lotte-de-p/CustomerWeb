import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatInstallationAddressComponent } from './feat-installation-address.component';
import { EventFacade } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('Sales FeatInstallationAddressComponent', () => {
  let component: FeatInstallationAddressComponent;
  let fixture: ComponentFixture<FeatInstallationAddressComponent>;
  let eventFacade: EventFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [FeatInstallationAddressComponent, TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);

    fixture = TestBed.createComponent(FeatInstallationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(eventFacade, 'triggerEvent').mockReturnValue();
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent').mockReturnValue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
