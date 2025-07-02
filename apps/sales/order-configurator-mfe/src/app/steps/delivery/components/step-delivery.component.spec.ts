import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFacade } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { stepLoaded } from '../events/step-loaded.const';
import { StepDeliveryComponent } from './step-delivery.component';
import { ConfigService } from '@telenet/ng-lib-config';

describe('StepDeliveryComponent', () => {
  let component: StepDeliveryComponent;
  let fixture: ComponentFixture<StepDeliveryComponent>;
  let eventFacade: EventFacade;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore(), ConfigService, { provide: 'Window', useValue: window }],
      imports: [
        StepDeliveryComponent,
        TranslateModule.forRoot(),
        TgFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
      ],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);
    configService = TestBed.inject(ConfigService);
    jest.spyOn(configService, 'getConfig').mockReturnValue('https://api.int.telenet.be/ocapi');

    fixture = TestBed.createComponent(StepDeliveryComponent);
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
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(stepLoaded);
    });
  });

  describe('onNextStep', () => {
    it('should return an observable with true when onNextStep is called', (done) => {
      component.onNextStep().subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });

    it('should return an observable that completes immediately when onNextStep is called', (done) => {
      const observable$ = component.onNextStep();
      observable$.subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });
  });
});
