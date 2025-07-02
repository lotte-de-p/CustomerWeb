import { AppointmentsOverviewComponent } from './appointments-overview.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { expect, jest } from '@jest/globals';
import { of } from 'rxjs';
import { AppointmentDatalayerService } from '@product-journey/appointments/data-access';

describe('AppointmentOverviewComponent', () => {
  let component: AppointmentsOverviewComponent;
  let fixture: ComponentFixture<AppointmentsOverviewComponent>;
  let dataLayerService: AppointmentDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppointmentsOverviewComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        AppointmentDatalayerService,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppointmentsOverviewComponent);
    component = fixture.componentInstance;
    dataLayerService = TestBed.inject(AppointmentDatalayerService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should not send analytics data when there are appointments', () => {
    jest.spyOn(dataLayerService, 'sendNoAppointmentPlannedEvent');
    const appointmentsData = [{ id: '1', date: new Date(), type: 'repair' }];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component as any).appointments$ = of(appointmentsData);

    fixture.detectChanges();

    expect(dataLayerService.sendNoAppointmentPlannedEvent).not.toHaveBeenCalled();
  });
});
