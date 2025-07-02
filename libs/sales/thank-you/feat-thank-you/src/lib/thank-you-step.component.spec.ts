import { ThankYouStepComponent } from './thank-you-step.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFacade, hideNavigationEvent } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { thankYouStepLoaded } from './events/thank-you-step-loaded.const';
import { ThankYouFacade } from '@sales/thank-you/data-access';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ThankYouStepComponent', () => {
  let component: ThankYouStepComponent;
  let fixture: ComponentFixture<ThankYouStepComponent>;
  let eventFacade: EventFacade;
  let thankYouFacade: ThankYouFacade;
  let facadeSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        {
          provide: 'Window',
          useValue: window,
        },
      ],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);
    thankYouFacade = TestBed.inject(ThankYouFacade);
    fixture = TestBed.createComponent(ThankYouStepComponent);
    component = fixture.componentInstance;
    facadeSpy = jest.spyOn(thankYouFacade, 'redirect').mockReturnValue(of('/test'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('OnInit', () => {
    it('should trigger step loaded event', () => {
      jest.spyOn(eventFacade, 'triggerEvent');
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(thankYouStepLoaded);
    });
    it('should trigger hide navigation event', () => {
      jest.spyOn(eventFacade, 'triggerEvent');
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(hideNavigationEvent);
    });
  });

  describe('onRedirectClick', () => {
    it('should call facade redirect', () => {
      component.onRedirectClick();
      expect(facadeSpy).toHaveBeenCalledTimes(1);
    });
  });
});
