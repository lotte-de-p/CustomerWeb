import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LanguageService } from '@telenet/ng-lib-page';
import { TrackInputEventDirective, TrackEventInfo, TrackingInfoDirective } from '.';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  template: ` <tg-form-input [trackInputEvent]="trackInputEvent"></tg-form-input>`,
})
export class TestComponent {
  @Input() trackInputEvent: TrackEventInfo;
}

describe('TrackInputEventDirective', () => {
  let component: TestComponent;
  let directive: TrackInputEventDirective;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  const trackingInfoDirective = new TrackingInfoDirective();
  const languageServiceStub = new LanguageService({} as Window);
  languageServiceStub.getLanguage = jest.fn();
  let dataLayerService: DataLayerService;
  const dataLayerServiceMock = {
    createCategory: jest.fn(),
    createEventInfo: jest.fn(),
    sendEvent: jest.fn(),
  };
  const trackingInfo = {
    category: 'category',
    primaryCategory: 'primaryCategory',
    subCategory: 'subCategory',
    intent: 'intent',
    flowType: 'flowType',
  };

  beforeEach(() => {
    trackingInfoDirective.trackingInfo = trackingInfo;
    fixture = TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TestComponent, TrackInputEventDirective],
      providers: [
        TranslateService,
        { provide: LanguageService, useValue: languageServiceStub },
        { provide: 'Window', useValue: {} },
        TrackingInfoDirective,
        { provide: DataLayerService, useValue: dataLayerServiceMock },
      ],
    })
      .overrideDirective(TrackInputEventDirective, {
        set: {
          providers: [
            {
              provide: TrackingInfoDirective,
              useValue: trackingInfoDirective,
            },
          ],
        },
      })
      .createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.directive(TrackInputEventDirective));
    directive = fixture.debugElement.query(By.directive(TrackInputEventDirective)).componentInstance;
    component = fixture.componentInstance;
    dataLayerService = TestBed.inject(DataLayerService);
    component.trackInputEvent = {
      label: 'label',
    };
    fixture.detectChanges();
  });

  describe('creation', () => {
    it('should be created', function () {
      expect(component).toBeTruthy();
    });
  });

  describe('TrackingEvent', () => {
    it('should call datalayer service when event is triggered', () => {
      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));

      debugElement.nativeElement.dispatchEvent(new Event('trackingEvent'));

      fixture.detectChanges();

      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({
          itemName: 'label',
          itemData: '',
          intent: 'intent',
          flowType: 'flowType',
          cart: Object({}),
        }),
        category: undefined,
      });

      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('trackingEvent', 'click');
    });

    it('should call datalayer service when event is triggered when trackInputEvent is undefined', () => {
      const event = new Event('trackingEvent');
      fixture.detectChanges();

      directive.blockData = false;

      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));

      debugElement.nativeElement.dispatchEvent(event);

      fixture.detectChanges();
      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({
          itemName: 'label',
          itemData: '',
          intent: 'intent',
          flowType: 'flowType',
          cart: Object({}),
        }),
        category: undefined,
      });
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('trackingEvent', 'click');
    });

    it('should call datalayer service when event is triggered with label', () => {
      const event = new FocusEvent('focusout');
      component.trackInputEvent = {
        label: 'label',
      };

      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));

      debugElement.nativeElement.dispatchEvent(event);

      fixture.detectChanges();
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({
          itemName: 'label',
          itemData: '',
          intent: 'intent',
          flowType: 'flowType',
          cart: Object({}),
        }),
        category: undefined,
      });
      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('trackingEvent', 'click');
    });

    it('should not prevent keypress event', () => {
      const event = new FocusEvent('focusin');

      debugElement.nativeElement.dispatchEvent(event);
      expect(event.defaultPrevented).toBeFalsy();
    });
  });
});
