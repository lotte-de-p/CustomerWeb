import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ComponentStep, StepFacade, StepsNgrxModule } from '@sales/shared/data-access';
import { SalesComponentViewComponent } from './sales-component-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'tg-sales-stepper',
  standalone: true,
  templateUrl: './sales-stepper.component.html',
  imports: [TranslateModule, NgIf, NgClass, SalesComponentViewComponent, StepsNgrxModule, AsyncPipe],
})
export class SalesStepperComponent implements OnInit {
  stepFacade = inject(StepFacade);
  @ViewChild(SalesComponentViewComponent)
  child: SalesComponentViewComponent;
  @Input()
  steps: ComponentStep[] = [];
  currentStepNumber: number;
  isConfirmationStep: boolean;
  hasNextStep = true;
  nextStepLabel = 'ng.step-flow.next-step-label';
  messageGroup: string;
  progressPercentage: string;
  isLoading: boolean;
  @Input() showStepCounter: boolean;
  @Input() showSalesContactNumber: boolean;
  @Input() showStepProgressBar: boolean;
  @Input() showNavigation: boolean | undefined;
  @Input() showBackButton = true;

  @Input() dynamicShadow: boolean;

  @Output() nextButtonClicked = new EventEmitter();

  currentStepKey$ = this.stepFacade.currentStepKey$;
  buttonTextOverride$ = this.stepFacade.nextButtonLabel$;

  ngOnInit(): void {
    this.stepFacade.goToFirstStep();
  }

  goToNextStep() {
    this.nextButtonClicked.emit();
    this.child
      .nextStep()
      .pipe(untilDestroyed(this))
      .subscribe((shouldGoToNextStep) => {
        if (shouldGoToNextStep) {
          this.stepFacade.goToNextStep();
        }
      });
  }

  goToPreviousStep() {
    this.stepFacade.goToPreviousStep();
  }

  browserBack() {
    this.stepFacade.browserBack();
  }
}
