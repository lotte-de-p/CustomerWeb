import { SummaryStepComponent } from './summary-step.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { EventFacade } from '@sales/events/data-access';
import { summaryStepLoaded } from './events/summary-step-loaded.const';
import { summaryStepFinished } from './events/summary-step-finished.const';
import { SummaryFacade, ViewStateEnum } from '@sales/summary/data-access';
import { contractSummaryLinkClicked } from './events/contract-summary-link-clicked.const';
import { of } from 'rxjs';

describe('SummaryStepComponent', () => {
  let component: SummaryStepComponent;
  let fixture: ComponentFixture<SummaryStepComponent>;
  let eventFacade: EventFacade;
  let summaryFacade: SummaryFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: 'Window', useValue: {} }],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);
    summaryFacade = TestBed.inject(SummaryFacade);
    fixture = TestBed.createComponent(SummaryStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should trigger the summary step loaded event', () => {
      jest.spyOn(eventFacade, 'triggerEvent');
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(summaryStepLoaded);
    });
  });

  describe('onNextStep', () => {
    it('should trigger the summary step finished event', (done) => {
      jest.spyOn(eventFacade, 'triggerEvent');
      component.onNextStep().subscribe(() => {
        expect(eventFacade.triggerEvent).toHaveBeenCalledWith(summaryStepFinished);
        done();
      });
    });
  });

  describe('showDepreciationOverlay', () => {
    it('should set the depreciation item and open the overlay', () => {
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
      const depreciationItem = {
        name: 'somename',
        price: 2000,
        duration: 0,
      };
      component.showDepreciationOverlay(depreciationItem);
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({
        name: 'view depreciation table link clicked',
      });
      expect(component.selectedDepreciationItem).toEqual(depreciationItem);
      expect(component.viewState).toEqual(ViewStateEnum.OVERLAY_OPEN);
    });
  });

  describe('showContractSummary', () => {
    it('should trigger the contract summary link clicked event', () => {
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
      jest.spyOn(eventFacade, 'triggerEvent');
      component.showContractSummary();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({
        name: 'view contract summary link clicked',
      });
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(contractSummaryLinkClicked);
    });
  });

  describe('showTermsAndConditions', () => {
    beforeEach(() => {
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
      jest.spyOn(summaryFacade, 'showTermsAndConditions').mockImplementation(() => of(false));
    });

    it('should invoke summary facade to show terms and condition and trigger analytics', () => {
      component.showTermsAndConditions();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({
        name: 'Terms and Conditions link clicked',
      });
      expect(summaryFacade.showTermsAndConditions).toHaveBeenCalled();
    });
  });

  describe('handleOrderButtonClicked', () => {
    beforeEach(() => {
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
      jest.spyOn(eventFacade, 'triggerEvent').mockImplementation(() => of(false));
    });

    it('should invoke order button clicked analytics event and summary step finished event', () => {
      component.handleOrderButtonClicked();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({
        name: 'order button clicked',
        attributes: { itemName: 'upfront payment' },
      });
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(summaryStepFinished);
    });
  });
});
