import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { TrackingInfo, TrackingInfoDirective, TrackInputEventDirective } from '.';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TgFormsModule } from '../../forms.module';

@Component({
  template: '<i [trackingInfo]="trackingInfo">some content</i>',
})
class TestComponent {
  @Input() trackingInfo!: TrackingInfo;
}

describe('TrackingInfoDirective', () => {
  let fixture: ComponentFixture<TrackingInfoDirective>;
  let component: TrackingInfoDirective;
  let testComponent: TestComponent;
  const trackingInfoDirective = new TrackingInfoDirective();

  beforeEach(() => {
    trackingInfoDirective.trackingInfo = {
      category: 'category',
      primaryCategory: 'primaryCategory',
      subCategory: 'subCategory',
      intent: 'intent',
      flowType: 'flowType',
    };
    const testBedStatic = TestBed.configureTestingModule({
      imports: [TgFormsModule],
      declarations: [TestComponent],
      providers: [TrackingInfoDirective],
      schemas: [NO_ERRORS_SCHEMA],
    }).overrideDirective(TrackInputEventDirective, {
      set: {
        providers: [
          {
            provide: TrackingInfoDirective,
            useValue: trackingInfoDirective,
          },
        ],
      },
    });
    fixture = testBedStatic.createComponent(TestComponent);

    testComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(TrackingInfoDirective)).componentInstance;
  });

  describe('should instantiated', () => {
    it('ss', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('should pass tracking info', () => {
    it('should ', function () {
      testComponent.trackingInfo = {
        intent: 'intent',
        flowType: 'flow-type',
      };

      fixture.detectChanges();

      expect(component.trackingInfo.flowType).toEqual('flow-type');
      expect(component.trackingInfo.intent).toEqual('intent');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
