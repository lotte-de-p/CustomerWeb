import { Component, DebugElement } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { LanguageService } from '@telenet/ng-lib-page';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventLinkClickDirective, TrackEventInfo, TrackingInfoDirective } from '.';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  template: `<a [clickEvent]="trackInputEvent!">aaa</a>`,
})
export class TestComponent {
  trackInputEvent?: TrackEventInfo;
}

const linkClick = 'link-click';
const linkClicked = 'link clicked';
describe('EventLinkClickDirective', function () {
  let component: TestComponent;
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
      declarations: [TestComponent, EventLinkClickDirective],
      providers: [
        TranslateService,
        { provide: LanguageService, useValue: languageServiceStub },
        { provide: 'Window', useValue: {} },
        TrackingInfoDirective,
        { provide: DataLayerService, useValue: dataLayerServiceMock },
      ],
    })
      .overrideDirective(EventLinkClickDirective, {
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
    debugElement = fixture.debugElement.query(By.directive(EventLinkClickDirective));
    component = fixture.componentInstance;
    component.trackInputEvent = {
      label: 'label',
    };
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
      debugElement.nativeElement.dispatchEvent(new MouseEvent('click'));

      fixture.detectChanges();

      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({ itemName: 'label', itemData: undefined, intent: 'intent', flowType: 'flowType' }),
        category: undefined,
      });

      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(linkClicked, linkClick);
    });

    it('should call datalayer service when event is triggered with trackInputEvent undefined', () => {
      component.trackInputEvent = undefined;

      fixture.detectChanges();

      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
      debugElement.nativeElement.dispatchEvent(new MouseEvent('click'));

      fixture.detectChanges();
      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({ itemName: 'label', itemData: undefined, intent: 'intent', flowType: 'flowType' }),
        category: undefined,
      });
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(linkClicked, linkClick);
    });

    it('should call datalayer service when event is triggered with label', () => {
      component.trackInputEvent = {
        label: 'label',
      };

      jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
      debugElement.nativeElement.dispatchEvent(new MouseEvent('click'));

      fixture.detectChanges();
      expect(dataLayerService.createCategory).toHaveBeenCalledWith(
        trackingInfo.primaryCategory,
        trackingInfo.subCategory
      );
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(linkClicked, linkClick);
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: undefined,
        attributes: Object({ itemName: 'label', itemData: undefined, intent: 'intent', flowType: 'flowType' }),
        category: undefined,
      });
    });

    it('should not prevent keypress event', () => {
      const event = new FocusEvent('focusin');

      debugElement.nativeElement.dispatchEvent(event);
      expect(event.defaultPrevented).toBeFalsy();
    });
  });
});
