import { importProvidersFrom } from '@angular/core';
import { StepsNgrxModule } from './+state/steps-ngrx.module';

export function provideStepsNgrxModule() {
  return [importProvidersFrom(StepsNgrxModule)];
}
