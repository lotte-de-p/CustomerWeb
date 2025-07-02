import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { LoginDetails, LoginModule } from '@telenet/ng-lib-ocapi';
import { WinkButton } from '@telenet/wink-ng';
import { FormGroup } from '@angular/forms';
import {
  ImageSrcInterceptorDirective,
  Message,
  MessageType,
  MobileLine,
  SimManagementComponentId,
  SimManagementFacade,
  SimManagementNgrxModule,
} from '@sim-management/data-access';
import { filter, firstValueFrom, map, Observable } from 'rxjs';
import { SixDigitFormComponent } from '../six-digit-form/six-digit-form.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SmsMobileLineSelectorComponent } from '../sms-mobile-line-selector/sms-mobile-line-selector.component';
import { SmsSelectedMobileLineComponent } from '../sms-selected-mobile-line/sms-selected-mobile-line.component';
import { SimManagementNotificationComponent } from '@sim-management/ui';
import { SimManagementStepContainerComponent } from '@sim-management/activation/ui';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-sms-verification',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    LoginModule,
    SimManagementNgrxModule,
    WinkButton,
    SixDigitFormComponent,
    ImageSrcInterceptorDirective,
    SmsMobileLineSelectorComponent,
    NgOptimizedImage,
    SmsSelectedMobileLineComponent,
    SimManagementNotificationComponent,
    SimManagementStepContainerComponent,
  ],
  templateUrl: './sms-verification.component.html',
})
export class SmsVerificationComponent {
  @Input() eSimSwapUrl: string;
  @Input() mobileLineDetailsUrl: string;
  @Input() imagePath!: string;

  validateSmsCodeForm = new FormGroup({});
  mobileLines: MobileLine[];
  selectedMobileLine$: Observable<MobileLine | undefined>;
  selectedMobileLineInSessionStorage: string | null = sessionStorage.getItem('selectedMobileLine');
  showDataOnlyPlan: boolean;
  showSixDigitCode: boolean;
  toggleReceiveCode: boolean;
  showActionResultMessage = true;
  smsCode = '';
  notificationMessage$: Observable<Message | undefined>;

  constructor(
    private readonly urlService: UrlService,
    private readonly facade: SimManagementFacade
  ) {}

  get SimManagementComponentId() {
    return SimManagementComponentId;
  }

  initAfterLoggedIn(loginDetails: LoginDetails) {
    this.facade.setLoginDetails(loginDetails);
    this.facade.loadMobileLines();
    this.selectedMobileLine$ = this.facade.selectedMobileLine$;
    this.notificationMessage$ = this.facade.actionResultMessage$;

    this.selectedMobileLine$.pipe(untilDestroyed(this)).subscribe((selectedMobileLine) => {
      if (selectedMobileLine) {
        if (selectedMobileLine.isDataOnlyPlan) {
          this.showDataOnlyPlan = true;
        } else {
          this.generateSMSCodeMessage(selectedMobileLine.msisdn);
          this.showDataOnlyPlan = false;
          this.showActionResultMessage = false;
        }
      }
    });

    this.facade.mobileLines$.pipe(untilDestroyed(this)).subscribe((mobileLines: MobileLine[]) => {
      const mobileLineToSelect = this.selectedMobileLineInSessionStorage
        ? mobileLines.find((mobileLine) => mobileLine.msisdn === this.selectedMobileLineInSessionStorage)
        : mobileLines[0];
      this.mobileLines = mobileLines.filter((line) => !line.isDataOnlyPlan);

      this.selectMobileLine(mobileLineToSelect);
    });
  }

  selectMobileLine(mobileLine?: MobileLine): void {
    if (mobileLine) {
      this.facade.setSelectedMobileLine(mobileLine);
    }
  }

  onBackClick(): void {
    this.urlService.redirectTo(this.mobileLineDetailsUrl);
  }

  onSubmitClick(msisdn: string) {
    if (this.validateSmsCodeForm.invalid) {
      this.facade.setActionResultMessage({
        type: MessageType.ERROR,
        text: 'ng.sim-management.error.invalid-sms-verification-code',
      });
    } else {
      this.facade.getESimSwapSalesOrderId(msisdn, this.smsCode);

      const salesOrderId$ = this.facade.eSimSwapSalesOrderId$.pipe(
        filter((salesOrder) => !!salesOrder),
        map((salesOrder) => salesOrder as string)
      );

      firstValueFrom(salesOrderId$).then((salesOrderId: string) => {
        const eSimSwapUrlWithParameters = this.eSimSwapUrl
          .replace('__msisdn__', msisdn)
          .replace('__salesOrderId__', salesOrderId);

        this.urlService.redirectTo(eSimSwapUrlWithParameters);
      });
    }
    this.showActionResultMessage = true;
  }

  toggleReceivingCode() {
    this.toggleReceiveCode = !this.toggleReceiveCode;
  }

  generateSMSCodeMessage(msisdn: string) {
    this.showActionResultMessage = true;
    this.facade.generateSMSVerificationCode(msisdn);
    this.validateSmsCodeForm.reset();
    this.showSixDigitCode = true;
  }

  toggleSixDigitCodeContent(showSixDigitCode: boolean) {
    this.showActionResultMessage = false;
    this.validateSmsCodeForm.reset();
    this.showSixDigitCode = showSixDigitCode;
  }

  getSmsCode(smsCode: string): void {
    this.smsCode = smsCode;
  }

  validateSmsCodeFormData(validateSmsCodeForm: FormGroup): void {
    this.validateSmsCodeForm = validateSmsCodeForm;
  }
}
