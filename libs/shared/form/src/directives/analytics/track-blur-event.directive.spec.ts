import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, Input } from '@angular/core';
import { TrackBlurEventDirective, TrackEventInfo, TrackingInfoDirective } from '.';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { DataLayerService } from '@telenet/ng-lib-datalayer';

@Component({
  template: `<input [trackBlurEvent]="trackBlurEvent" formControlName="formControlName" />`,
})
export class TestComponent {
  @Input() trackBlurEvent: TrackEventInfo;
}

const formFieldCompleted = 'form field completed';
describe('TrackBlurEventDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: TrackBlurEventDirective;
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
      declarations: [TrackBlurEventDirective, TestComponent],
      providers: [
        TranslateService,
        { provide: LanguageService, useValue: languageServiceStub },
        { provide: 'Window', useValue: {} },
        TrackingInfoDirective,
        { provide: DataLayerService, useValue: dataLayerServiceMock },
      ],
    })
      .overrideDirective(TrackBlurEventDirective, {
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
    debugElement = fixture.debugElement.query(By.directive(TrackBlurEventDirective));
    directive = fixture.debugElement.query(By.directive(TrackBlurEventDirective)).componentInstance;
    component = fixture.componentInstance;
    dataLayerService = TestBed.inject(DataLayerService);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call datalayer service when event is triggered', () => {
    const event = new FocusEvent('focusout');
    jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));

    debugElement.nativeElement.dispatchEvent(event);

    fixture.detectChanges();

    expect(dataLayerService.createCategory).toHaveBeenCalledWith(
      trackingInfo.primaryCategory,
      trackingInfo.subCategory
    );
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: undefined,
      attributes: { itemName: 'formControlName', itemData: '', intent: 'intent', flowType: 'flowType', cart: {} },
      category: undefined,
    });
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(formFieldCompleted, 'click');
  });

  it('should call datalayer service when event is triggered with label', () => {
    const event = new FocusEvent('focusout');
    component.trackBlurEvent = {
      label: 'label',
    };

    directive.blockData = false;

    jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
    debugElement.nativeElement.dispatchEvent(event);

    fixture.detectChanges();
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: undefined,
      attributes: { itemName: 'formControlName', itemData: '', intent: 'intent', flowType: 'flowType', cart: {} },
      category: undefined,
    });
    expect(dataLayerService.createCategory).toHaveBeenCalledWith(
      trackingInfo.primaryCategory,
      trackingInfo.subCategory
    );
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(formFieldCompleted, 'click');
  });

  it('should call datalayer service when event is triggered', () => {
    const event = new FocusEvent('focusout');
    component.trackBlurEvent = {
      label: 'label',
    };

    jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
    debugElement.nativeElement.dispatchEvent(event);

    fixture.detectChanges();
    expect(dataLayerService.createCategory).toHaveBeenCalledWith(
      trackingInfo.primaryCategory,
      trackingInfo.subCategory
    );
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: undefined,
      attributes: { itemName: 'formControlName', itemData: '', intent: 'intent', flowType: 'flowType', cart: {} },
      category: undefined,
    });
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(formFieldCompleted, 'click');
  });

  it('should not prevent keypress event', () => {
    const event = new FocusEvent('focusin');

    debugElement.nativeElement.dispatchEvent(event);
    expect(event.defaultPrevented).toBeFalsy();
  });
});
