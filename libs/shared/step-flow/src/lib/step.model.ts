import { Type } from '@angular/core';
import { StepEnum } from './step.enum';
import { StepLayoutOptionsInterface } from './step-layout-options.interface';
import { Observable } from 'rxjs';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { StepAnalyticsOptions } from './interfaces/step-analytics-options.interface';

type ButtonCallBack = () => Observable<boolean | Record<string, unknown>>;
export class Step {
  key: string;
  type: StepEnum = StepEnum.DEFAULT;
  template: Type<unknown>;
  titleParameterValue: Observable<string>;
  component: { selector: unknown };
  withNextButton: boolean;
  nextButtonLabel = 'btn.steps.next';
  nextButtonCallback: ButtonCallBack;
  prevButtonCallback: ButtonCallBack;
  previousStepDisabled: boolean;
  asAlternativeFirstStep: boolean;
  image: string;
  imageMobile: string;
  isImageScrollable: boolean;
  isEnabled = true;
  isCompleted = false;
  layoutOptions?: StepLayoutOptionsInterface;
  overwriteFlowLabel?: string;
  chosenProduct$?: Observable<OmapiProduct | unknown>;
  order: number;

  analyticsOptions?: StepAnalyticsOptions;

  constructor(key: string) {
    this.key = key;
    this.withNextButton = true;
  }

  public isFinal(): boolean {
    return this.type === StepEnum.FINAL;
  }

  public setCompleted(completedState: boolean) {
    this.isCompleted = completedState;
  }

  public isConfirm() {
    return this.type === StepEnum.CONFIRM;
  }
}
