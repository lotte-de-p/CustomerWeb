import { Component, Input, ViewChild, inject, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SalesStepperDirective } from '../directives';
import { ComponentStep, StepFacade } from '@sales/shared/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'tg-sales-component-viewer',
  standalone: true,
  templateUrl: './sales-component-view.component.html',
  imports: [SalesStepperDirective],
})
@UntilDestroy()
export class SalesComponentViewComponent implements OnInit {
  @Input() componentSteps: ComponentStep[] = [];

  @ViewChild(SalesStepperDirective, { static: true }) stepContainer: SalesStepperDirective;

  stepFacade = inject(StepFacade);
  currentStepKey$ = this.stepFacade.currentStepKey$;

  nextStep: () => Observable<boolean>;

  ngOnInit() {
    this.currentStepKey$.pipe(untilDestroyed(this)).subscribe((currentStep) => {
      const step = this.componentSteps.find((step) => currentStep === step.key);
      if (step && step.component) {
        this.stepContainer.viewContainer.clear();
        const stepComponentComponentRef = this.stepContainer.viewContainer.createComponent(step.component);
        const instance = stepComponentComponentRef.instance;
        this.stepFacade.setNextButtonLabel(step.nextButtonLabel);
        this.nextStep = instance.onNextStep.bind(instance);
      } else {
        console.log('No step found for key:' + currentStep);
      }
    });
  }
}
