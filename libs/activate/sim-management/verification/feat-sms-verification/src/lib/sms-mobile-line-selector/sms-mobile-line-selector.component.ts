import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MobileLine, SimStatus } from '@sim-management/data-access';
import { PhoneNumberPipe } from '@sim-management/ui';
import { WinkButton } from '@telenet/wink-ng';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-sms-verification-mobile-line-selector',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, PhoneNumberPipe, WinkButton],
  templateUrl: './sms-mobile-line-selector.component.html',
})
export class SmsMobileLineSelectorComponent implements OnInit {
  @Input() mobileLines: MobileLine[];
  @Output() generateSMSCodeMessage = new EventEmitter<string>();
  @Output() toggleSixDigitCodeContent = new EventEmitter();

  selectedMobileLine: MobileLine | undefined;
  isSelectorOpen: boolean;
  showGenerateSMSButton = true;

  ngOnInit(): void {
    this.mobileLines = this.mobileLines.filter(
      (mobileLine) =>
        (!mobileLine.isDataOnlyPlan && mobileLine.status === SimStatus.ACTIVE) ||
        mobileLine.status === SimStatus.COMPLETED
    );
    this.selectedMobileLine = this.mobileLines[0];
  }

  toggleSelector() {
    this.isSelectorOpen = !this.isSelectorOpen;
  }

  selectMobileLine(mobileLine: MobileLine) {
    this.selectedMobileLine = mobileLine;
    this.toggleSixDigitCode(false);
  }

  generateSMSCode(mobileLine: MobileLine): void {
    this.toggleSixDigitCode(true);
    this.generateSMSCodeMessage.emit(mobileLine.msisdn);
  }

  private toggleSixDigitCode(showSixDigitCode: boolean) {
    this.showGenerateSMSButton = !showSixDigitCode;
    this.toggleSixDigitCodeContent.emit(showSixDigitCode);
  }
}
