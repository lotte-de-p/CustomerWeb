import { Component, DebugElement } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { LanguageService } from '@telenet/ng-lib-page';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonClickDirective, TrackEventInfo, TrackingInfoDirective } from '.';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  template: ` <button [clickEvent]="trackInputEvent!">aaa</button>`,
})
export class TestComponent {
  trackInputEvent?: TrackEventInfo;
}

const buttonClicked = 'button clicked';
const click = 'click';
describe('ButtonClickDirective', function () {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let dataLayerService: DataLayerService;
  const dataLayerServiceMock = {
    createCategory: jest.fn(),
    createEventInfo: jest.fn(),
    sendEvent: jest.fn(),
  };
  const trackingInfoDirective = new TrackingInfoDirective();
  let languageServiceStub: LanguageService;
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
      declarations: [TestComponent, ButtonClickDirective],
      providers: [
        TranslateService,
        LanguageService,
        { provide: 'Window', useValue: {} },
        TrackingInfoDirective,
        { provide: DataLayerService, useValue: dataLayerServiceMock },
      ],
    })
      .overrideDirective(ButtonClickDirective, {
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
    debugElement = fixture.debugElement.query(By.directive(ButtonClickDirective));
    component = fixture.componentInstance;
    component.trackInputEvent = {
      label: 'label',
    };
    languageServiceStub = TestBed.inject(LanguageService);
    languageServiceStub.getLanguage = jest.fn();
    fixture.detectChanges();
    dataLayerService = TestBed.inject(DataLayerService);
  });

  describe('creation', () => {
    it('should be created', function () {
      expect(component).toBeTruthy();
    });
  });

  describe('TrackingEvent', () => {
    it('should call datalayer service when event is triggered', () => {
      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));

      debugElement.nativeElement.dispatchEvent(new MouseEvent(click));

      fixture.detectChanges();

      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(buttonClicked, click);
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({
          itemName: 'label',
          itemData: '',
          intent: 'intent',
          flowType: 'flowType',
          cart: undefined,
        }),
        category: undefined,
      });
    });

    it('should call datalayer service when event is triggered with trackInputEvent undefined', () => {
      component.trackInputEvent = undefined;

      fixture.detectChanges();

      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
      debugElement.nativeElement.dispatchEvent(new MouseEvent(click));

      fixture.detectChanges();
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({
          itemName: 'label',
          itemData: '',
          intent: 'intent',
          flowType: 'flowType',
          cart: undefined,
        }),
        category: undefined,
      });
      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(buttonClicked, click);
    });

    it('should call datalayer service when event is triggered with label', () => {
      component.trackInputEvent = {
        label: 'label',
      };

      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
      debugElement.nativeElement.dispatchEvent(new MouseEvent(click));

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
          cart: undefined,
        }),
        category: undefined,
      });
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(buttonClicked, click);
    });

    it('should not prevent keypress event', () => {
      const event = new FocusEvent('focusin');

      debugElement.nativeElement.dispatchEvent(event);
      expect(event.defaultPrevented).toBeFalsy();
    });
  });
});
