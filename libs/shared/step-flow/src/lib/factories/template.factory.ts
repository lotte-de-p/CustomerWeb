import { StepBuilder } from '../step.builder';
import { StepConfig } from '../interfaces/step-config.interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemplateFactory {
  determineTemplate(_stepBuilder: StepBuilder, _stepConfig: StepConfig): void {
    // default is empty
  }
}
