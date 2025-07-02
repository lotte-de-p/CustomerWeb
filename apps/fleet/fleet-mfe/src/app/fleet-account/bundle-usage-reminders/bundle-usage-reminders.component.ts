import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AbstractBaseComponent, LoaderModule } from '@telenet/ng-lib-page';
import { MessageService, MessagesModule, SuccessMessage, WarningMessage } from '@telenet/ng-lib-message';
import { BundleUsageRemindersConstants } from './constants/bundle-usage-reminders.constants';
import { BundleUsageRemindersService } from './services/bundle-usage-reminders.service';
import { takeUntil } from 'rxjs/operators';
import { RegexConstants } from '../../shared/common/regex/regex.constant';
import { ThresholdInterface } from '../../shared/common/services/billing/interfaces/account-threshold.interface';
import { AccountEventDelegator } from '@telenet/ng-lib-account';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { NgIf } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  selector: 'tg-bundle-usage-reminders',
  templateUrl: './bundle-usage-reminders.component.html',
  standalone: true,
  imports: [MessagesModule, LoaderModule, LoginModule, NgIf, ReactiveFormsModule, TgFormsModule, TranslateModule],
})
export class BundleUsageRemindersComponent extends AbstractBaseComponent {
  @Input() componentInstanceId: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  messageGroupName = BundleUsageRemindersConstants.MESSAGE_GROUP;
  scopes = BundleUsageRemindersConstants.SCOPES;
  usageReminderForm: FormGroup;
  initialThreshold: ThresholdInterface;
  selectedBillingAccountNumber: string;
  showForm: boolean;
  isUpdateInProgress: boolean;

  constructor(
    private readonly bundleUsageRemindersService: BundleUsageRemindersService,
    private readonly messageService: MessageService,
    private readonly accountEventDelegator: AccountEventDelegator
  ) {
    super();
  }

  initAfterLoggedIn(): void {
    this.initializeForm();
    this.obs(this.accountEventDelegator.billingAccount())
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((billingAccount) => this.onBillingAccountChange(billingAccount.accountNumber));
  }

  saveUsageReminder(): void {
    this.obs(
      this.bundleUsageRemindersService.updateAccountThreshold(
        this.selectedBillingAccountNumber,
        this.initialThreshold,
        this.getEnableReminderControl().value,
        this.getOverConsumptionThresholdControl().value,
        this.componentInstanceId
      )
    )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.clearMessages();
          this.showSaveSuccessMessage();
          this.usageReminderForm.markAsPristine();
        },
      });
  }

  displayOverConsumptionThresholdInput(): boolean {
    return this.getEnableReminderControl().value;
  }

  isSaveButtonDisabled(): boolean {
    return this.isUpdateInProgress || this.usageReminderForm.pristine || this.usageReminderForm.invalid;
  }

  private onBillingAccountChange(accountNumber: string): void {
    this.selectedBillingAccountNumber = accountNumber;
    this.obs(this.bundleUsageRemindersService.getAccountThreshold(accountNumber))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (threshold: ThresholdInterface) => {
          this.clearMessages();
          this.initialThreshold = threshold;
          this.updateForm(threshold);
          this.handleUpdateInProgress(threshold);
          this.showForm = true;
        },
        error: () => (this.showForm = false),
      });
  }

  private initializeForm(): void {
    this.usageReminderForm = new FormGroup({
      enableReminder: new FormControl(),
      overConsumptionThreshold: new FormControl(null, [
        Validators.required,
        Validators.pattern(RegexConstants.NUMBER_ONLY_REGEX),
      ]),
    });
  }

  private updateForm(threshold: ThresholdInterface): void {
    this.getEnableReminderControl().setValue(threshold.isEnabled);
    this.getOverConsumptionThresholdControl().setValue(threshold.value);
    this.usageReminderForm.markAsPristine();
  }

  private getEnableReminderControl(): FormControl {
    return this.usageReminderForm.get('enableReminder') as FormControl;
  }

  private getOverConsumptionThresholdControl(): FormControl {
    return this.usageReminderForm.get('overConsumptionThreshold') as FormControl;
  }

  private handleUpdateInProgress(threshold: ThresholdInterface): void {
    this.isUpdateInProgress = threshold.inProgress !== undefined ? threshold.inProgress : false;
    if (this.isUpdateInProgress) {
      this.showUpdateInProgressWarningMessage();
      this.disableForm();
    } else {
      this.enableForm();
    }
  }

  private clearMessages(): void {
    this.messageService.clearMessages(this.messageGroupName);
  }

  private showSaveSuccessMessage(): void {
    this.messageService.addMessage(
      new SuccessMessage(this.messageGroupName, BundleUsageRemindersConstants.SUCCESS_UPDATE_ACCOUNT_KEY)
    );
  }

  private showUpdateInProgressWarningMessage(): void {
    this.messageService.addMessage(
      new WarningMessage(this.messageGroupName, BundleUsageRemindersConstants.UPDATE_IN_PROGRESS_KEY)
    );
  }

  private enableForm(): void {
    this.getEnableReminderControl().enable();
    this.getOverConsumptionThresholdControl().enable();
  }

  private disableForm(): void {
    this.getEnableReminderControl().disable();
    this.getOverConsumptionThresholdControl().disable();
  }
}
