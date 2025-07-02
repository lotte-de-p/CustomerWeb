import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepContainerDirective, StepHostDirective, StepContainerComponent } from './step-container';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [StepContainerDirective, StepHostDirective, StepContainerComponent, NavigationBarComponent],
  exports: [StepContainerComponent, StepContainerDirective, StepHostDirective, NavigationBarComponent],
  providers: [TranslateService],
})
export class StepFlowLibModule {}
