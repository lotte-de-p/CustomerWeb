import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimNumberComponent } from './sim-number.component';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFleetLineState } from '../../state/create-line-flow.state';
import { StepFlowState } from '@telenet/ng-lib-step-flow';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TgFormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([StepFlowState, CreateFleetLineState]),
    SimNumberComponent,
  ],
  exports: [SimNumberComponent],
})
export class FleetSimNumberModule {}
