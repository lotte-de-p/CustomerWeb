import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFacade } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { StepAppointmentComponent } from './step-appointment.component';
import { stepLoaded } from '../events/step-loaded.const';

describe('StepAppointmentComponent', () => {
  let component: StepAppointmentComponent;
  let fixture: ComponentFixture<StepAppointmentComponent>;
  let eventFacade: EventFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        StepAppointmentComponent,
        TranslateModule.forRoot(),
        TgFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
      ],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);

    fixture = TestBed.createComponent(StepAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(eventFacade, 'triggerEvent').mockReturnValue();
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent').mockReturnValue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.viewModel).toEqual(
      expect.objectContaining({
        stepImage: '/content/dam/www-telenet-touch/default/images/hardware-checkout/delivery.svg',
      })
    );
  });

  describe('OnInit', () => {
    it('should trigger installationAddressStepLoaded event', () => {
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(stepLoaded);
    });
  });
});
