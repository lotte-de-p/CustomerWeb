import { LoaderService } from '@telenet/ng-lib-page';
import { NavigationBarComponent } from './navigation-bar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormErrorService } from '@telenet/ng-lib-form';
import { GoToNextStepAction, SetStepsAction, StepFlowState } from '../store';
import { TemplateFactory } from '../';
import { Step } from '../step.model';
import { StepEnum } from '../step.enum';
import { Subject } from 'rxjs';
import { NavigationBarNextLabelEnum } from '.';

const finalStep = new Step('second-step');
finalStep.type = StepEnum.FINAL;

const steps = [new Step('first-step'), finalStep];

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;
  let loaderService: LoaderService;
  let store: Store;
  let formErrorService: FormErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
      providers: [LoaderService, FormErrorService, TemplateFactory],
      imports: [
        NgxsModule.forRoot([StepFlowState]),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  });

  beforeEach(() => {
    store = TestBed.inject(Store);
    store.dispatch(new SetStepsAction(steps));
    loaderService = TestBed.inject(LoaderService);
    formErrorService = TestBed.inject(FormErrorService);
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goToNextStep', () => {
    it('should set the next step', () => {
      component.goToNextStep();
      expect(component.currentStep.key).toBe('second-step');
      expect(component.hasNextStep).toBe(true);
      expect(component.currentStepNumber).toBe(2);
      expect(component.progressPercentage).toBe('100');
    });

    it('should trigger the form submit if there is a form defined', () => {
      formErrorService.submit$.next = jest.fn();

      component.goToNextStep();
      expect(formErrorService.submit$.next).toHaveBeenCalled();
    });

    it('should trigger the callback when one is defined', () => {
      finalStep.nextButtonCallback = jest.fn().mockReturnValue(new Subject());

      store.dispatch(new SetStepsAction(steps));
      store.dispatch(new GoToNextStepAction());

      component.goToNextStep();
      expect(component.currentStep.nextButtonCallback).toHaveBeenCalled();
    });
  });

  describe('goToPreviousStep', () => {
    it('should set the previous step', () => {
      component.goToNextStep();
      component.goToPreviousStep();
      expect(component.currentStep.key).toBe('first-step');
      expect(component.hasNextStep).toBe(true);
      expect(component.currentStepNumber).toBe(1);
      expect(component.progressPercentage).toBe('50');
    });
  });

  describe('getNextLabel', () => {
    it('should return the default label if the current step is not final', () => {
      expect(component.getNextLabel()).toBe(NavigationBarNextLabelEnum.START);
    });

    it('should return the final label if the current step is final', () => {
      component.goToNextStep();
      expect(component.getNextLabel()).toBe(NavigationBarNextLabelEnum.FINAL);
    });
    it('should return the confirm label given the current step is an alternative first step', () => {
      jest.spyOn(component, 'isCurrentStepAlternativeFirstStep').mockReturnValue(true);

      const actual = component.getNextLabel();

      expect(actual).toBe(NavigationBarNextLabelEnum.CONFIRM);
    });
  });

  describe('isLoading', () => {
    it('should be true when the loaderservice is set to loading', () => {
      loaderService.start();
      expect(component.isLoading).toBe(true);

      loaderService.stop();
      expect(component.isLoading).toBe(false);
    });
  });

  describe('isCurrentStepAlternativeFirstStep', () => {
    it('should return true given the current step is an alternative first step', () => {
      component.currentStepNumber = 1;
      component.alternativeFirstStep = true;

      const actual = component.isCurrentStepAlternativeFirstStep();

      expect(actual).toBe(true);
    });
  });

  describe('showSalesContactNumber', () => {
    it('should show sales contact number when input is true', () => {
      component.showSalesContactNumber = true;

      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector(
          '.display--flex.flex-direction--column.font-weight--bold.align-items--center'
        )
      ).not.toBeNull();
    });
    it('should not show sales contact number when input is false', () => {
      component.showSalesContactNumber = false;

      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector(
          '.display--flex.flex-direction--column.font-weight--bold.align-items--center'
        )
      ).toBeNull();
    });
  });

  describe('messageGroup', () => {
    it('should expand using input', () => {
      component.showSalesContactNumber = true;
      component.messageGroup = 'customer-registration';

      fixture.detectChanges();

      const messages: HTMLElement[] = fixture.nativeElement.querySelectorAll(
        'div.display--flex a>span, div.display--flex a:last-of-type'
      );
      const infoMessages = fixture.nativeElement.querySelectorAll('div.display--flex > div > span');

      expect(messages[1].innerHTML).toContain('customer-registration.free-sales-number');
      expect(infoMessages[1].innerHTML).toContain('customer-registration.info.free-sales-number');
    });
  });
});
