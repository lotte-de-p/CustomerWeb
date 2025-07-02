import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFacade } from '@sales/events/data-access';
import { StoreModule } from '@ngrx/store';
import { AnalyticsClickEventDirective } from './track-click-event.directive';

@Component({
  imports: [AnalyticsClickEventDirective],
  template: ` <button [tgSalesTrackClickEvent]="{ name: 'test' }">aaa</button>`,
})
export class TestComponent {}

describe('TrackClickEventDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let eventFacade: EventFacade;
  let debugElement: HTMLButtonElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), AnalyticsClickEventDirective],
      declarations: [TestComponent],
      providers: [],
    }).createComponent(TestComponent);

    eventFacade = TestBed.inject(EventFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.nativeElement.querySelector('button');
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
  });

  describe('created', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('onClick', () => {
    it('should trigger analytics click event on eventFacade', () => {
      debugElement.click();
      fixture.detectChanges();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'test' });
    });
  });
});
