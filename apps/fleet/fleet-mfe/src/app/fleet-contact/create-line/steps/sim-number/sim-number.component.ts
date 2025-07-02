import { Component, Input } from '@angular/core';
import { CreateFleetLineConstants } from '../../constants/create-line.constants';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Store } from '@ngxs/store';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SimCardNumberValidator } from '../../validators/sim-card-number-validator';
import { Observable, of } from 'rxjs';
import { SimNumberInterface } from '../../models/input.interface';
import { CreateFleetLineFlowActions } from '../../state/create-line-flow.actions';
import { AbstractStepComponent } from '../abstract-step.component';
import { catchError, filter, finalize, map, switchMap, tap } from 'rxjs/operators';
import { CreateFleetLineFlowSelectors } from '../../state/create-line-flow.selectors';
import { MessageService } from '@telenet/ng-lib-message';
import { LoaderService } from '@telenet/ng-lib-page';
import SetUserInputForStep = CreateFleetLineFlowActions.SetUserInputForStep;
import { SimValidationService } from '../../services/sim-validation.service';
import { SimStatusService } from '../../services/sim-status.service';
import { SimDetailsModel } from '../../../../shared/common/models/sim-details.model';
import { NgClass, NgIf } from '@angular/common';
import { TgFormsModule } from '@telenet/ng-lib-form';

@Component({
  templateUrl: './sim-number.component.html',
  standalone: true,
  imports: [TgFormsModule, ReactiveFormsModule, NgClass, NgIf, TranslateModule],
})
export class SimNumberComponent extends AbstractStepComponent {
  messageGroup = CreateFleetLineConstants.MESSAGE_GROUP;
  showSim = false;
  simNumberPrefix = CreateFleetLineConstants.ICCID_PREFIX;
  @Input() orderSimUrl!: string;
  private readonly SIM_NUMBER_FORM_CONTROL_NAME = 'sim-number';

  constructor(
    public store: Store,
    private readonly simValidationService: SimValidationService,
    private readonly simStatusService: SimStatusService,
    protected translate: TranslateService,
    private readonly dataLayerService: DataLayerService,
    private readonly loaderService: LoaderService,
    private readonly messageService: MessageService
  ) {
    super(store);
  }

  get simNumberNumberValue(): string {
    return this.simNumberPrefix.concat(this.iccid);
  }

  get iccid(): string {
    return this.form.controls[this.SIM_NUMBER_FORM_CONTROL_NAME]?.value;
  }

  initializeStepComponent(): void {
    this.pushPageStepDataToAnalytics(CreateFleetLineConstants.STEP_ID_SIM_SETUP);
    this.orderSimUrl = this.store.selectSnapshot(CreateFleetLineFlowSelectors.orderSimUrl);
    this.messageService.clearMessages(this.messageGroup);
    this.initializeForm();
  }

  initializeForm(): void {
    const simNumberStepInput = this.getCurrentStepData() as SimNumberInterface;

    this.form.addControl(
      'sim-number',
      new FormControl(
        simNumberStepInput.simNumber
          ? simNumberStepInput.simNumber.slice(CreateFleetLineConstants.ICCID_PREFIX.length)
          : '',
        [SimCardNumberValidator.isValidSimCardWithIccidNumber(this.simNumberPrefix), Validators.maxLength(13)]
      )
    );
  }

  onStepSubmit(): Observable<boolean> {
    if (this.form.invalid) {
      this.triggerFormValidation();
      return of(false);
    }
    return this.validateSimIccid();
  }

  validateSimIccid(): Observable<boolean> {
    this.loaderService.start();
    return this.obs(this.simValidationService.validateSimIccid(this.messageGroup, this.simNumberNumberValue)).pipe(
      filter((response: Response & SimDetailsModel) => response?.status === 200),
      switchMap(() => this.simStatusService.getSimStatus(this.messageGroup, this.simNumberNumberValue)),
      tap(() => this.saveData()),
      map(() => true),
      catchError(() => of(false)),
      finalize(() => this.loaderService.stop())
    );
  }

  clearValidationError(): void {
    this.form.setErrors(null);
  }

  displaySimHelp(): void {
    this.showSim = !this.showSim;
  }

  pushPageStepDataToAnalytics(stepId: string): void {
    const attributes: DataLayerAttributes = {
      stepId: stepId,
      intent: CreateFleetLineConstants.EVENT_ATTRIBUTE_INTENT_CREATE_LINE,
    } as DataLayerAttributes;
    this.dataLayerService.addStepViewEvent(attributes);
  }

  setStepData(): string {
    return this.iccid;
  }

  private saveData(): void {
    const simNumberInput = {} as SimNumberInterface;
    simNumberInput.simNumber = this.simNumberNumberValue;
    this.store.dispatch(new SetUserInputForStep(this.currentStepKey, simNumberInput));
  }
}
