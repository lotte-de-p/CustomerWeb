import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFacade } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { StepInstallationAddressComponent } from './step-installation-address.component';
import { installationAddressStepLoaded } from '../events/installation-address-step-loaded.const';

describe('StepInstallationAddressComponent', () => {
  let component: StepInstallationAddressComponent;
  let fixture: ComponentFixture<StepInstallationAddressComponent>;
  let eventFacade: EventFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        StepInstallationAddressComponent,
        TranslateModule.forRoot(),
        TgFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
      ],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);

    fixture = TestBed.createComponent(StepInstallationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(eventFacade, 'triggerEvent').mockReturnValue();
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent').mockReturnValue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('OnInit', () => {
    it('should trigger installationAddressStepLoaded event', () => {
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(installationAddressStepLoaded);
    });
  });

  describe('onAddressSelected', () => {
    it('should trigger analytics click event', () => {
      component.onAddressSelected();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'existing address selected' });
    });
  });
});
