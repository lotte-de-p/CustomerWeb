import { Step } from './step.model';
import { StepEnum } from './step.enum';
import { Observable } from 'rxjs';
import { StepLayoutOptionsInterface } from './step-layout-options.interface';
import { StepAnalyticsOptions } from './interfaces/step-analytics-options.interface';
import { Type } from '@angular/core';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export class StepBuilder {
  private readonly _step: Step;

  private constructor(key: string) {
    this._step = new Step(key);
  }

  public static builder(key: string): StepBuilder {
    return new StepBuilder(key);
  }

  public withLayoutOptions(layout?: StepLayoutOptionsInterface): StepBuilder {
    if (layout) {
      this._step.layoutOptions = layout;
    }
    return this;
  }

  public withAnalyticsOptions(analyticsOptions?: StepAnalyticsOptions): StepBuilder {
    if (analyticsOptions) {
      this._step.analyticsOptions = analyticsOptions;
    }
    return this;
  }

  public withImage(image?: string): StepBuilder {
    if (image) {
      this._step.image = image;
    }
    return this;
  }

  public withComponent(selector: unknown): StepBuilder {
    this._step.component = { selector: selector };
    return this;
  }

  public withOrder(order: number): StepBuilder {
    this._step.order = order;
    return this;
  }

  public withEnabledState(state = true): StepBuilder {
    this._step.isEnabled = state;
    return this;
  }

  public withTemplate(template: Type<unknown>): StepBuilder {
    this._step.template = template;
    return this;
  }

  public withCompletedState(state = true): StepBuilder {
    this._step.setCompleted(state);
    return this;
  }

  public withPreviousStepDisabled(state = false): StepBuilder {
    this._step.previousStepDisabled = state;
    return this;
  }

  public withFinalState(): StepBuilder {
    this._step.type = StepEnum.FINAL;
    return this;
  }

  public withConfirmState(): StepBuilder {
    this._step.type = StepEnum.CONFIRM;
    return this;
  }

  public withOverwriteFlowLabel(flowLabel: string): StepBuilder {
    this._step.overwriteFlowLabel = flowLabel;
    return this;
  }

  public withTitleParameterValue(value: Observable<string>): StepBuilder {
    this._step.titleParameterValue = value;
    return this;
  }

  public withChosenProductValue(value: Observable<OmapiProduct | unknown>): StepBuilder {
    this._step.chosenProduct$ = value;
    return this;
  }

  public withMobileImage(value: string): StepBuilder {
    this._step.imageMobile = value;
    return this;
  }

  public withScrollableImage(scrollable = true): StepBuilder {
    this._step.isImageScrollable = scrollable;
    return this;
  }

  public withAsAlternativeFirstStep(): StepBuilder {
    this._step.asAlternativeFirstStep = true;
    return this;
  }

  public build(): Step {
    return this._step;
  }
}
