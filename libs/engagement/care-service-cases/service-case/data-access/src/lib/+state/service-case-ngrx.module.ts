import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { serviceCaseFeature } from './service-case.reducers';
import { ServiceCaseEffects } from './service-case.effects';
import { ServiceCaseDatalayerEffects } from './service-case-datalayer.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([ServiceCaseEffects, ServiceCaseDatalayerEffects]),
    StoreModule.forFeature(serviceCaseFeature),
  ],
})
export class ServiceCaseNgrxModule {}
