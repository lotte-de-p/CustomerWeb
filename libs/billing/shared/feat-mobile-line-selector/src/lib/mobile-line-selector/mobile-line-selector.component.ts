import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { MobileLine, MobileLinesService } from '@billing/shared/data-access';
import {
  ErrorNotificationComponent,
  MobileActivationInProgressNotificationComponent,
  SlideMenuComponent,
} from '@billing/shared/ui';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mobile-line-selector',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SlideMenuComponent,
    NgIf,
    NgFor,
    PhoneNumberPipe,
    MobileActivationInProgressNotificationComponent,
    ErrorNotificationComponent,
  ],
  templateUrl: './mobile-line-selector.component.html',
  styleUrl: './mobile-line-selector.component.scss',
})
export class MobileLineSelectorComponent implements OnInit {
  public static MOBILE_LINE_STORAGE_KEY = 'mobile-line-selector';
  @Output() mobileLineSelected = new EventEmitter<MobileLine>();
  mobileLines: MobileLine[] = [];
  selectedMobileLine: MobileLine | undefined;
  loading = false;
  showMenu = false;
  showError = false;
  ACTIVATION_IN_PROGRESS = 'ACTIVATION_IN_PROGRESS';
  private readonly urlService = inject(UrlService);
  private readonly service = inject(MobileLinesService);

  ngOnInit() {
    this.loading = true;
    this.service.getMobileLines().subscribe({
      next: (mobileLines: MobileLine[]) => {
        this.mobileLines = mobileLines;
        this.selectedMobileLine = this.getMobileLines(mobileLines);
        this.selectMobileLine(this.selectedMobileLine);
      },
      error: () => this.handleError(),
      complete: () => (this.loading = false),
    });
  }

  handleError() {
    this.loading = false;
    this.showError = true;
  }

  getMobileLines(mobileLines: MobileLine[]): MobileLine | undefined {
    const storedMobileLine = sessionStorage.getItem(MobileLineSelectorComponent.MOBILE_LINE_STORAGE_KEY);
    const queryMobileLine = this.urlService.getRequestParamValue('msisdn', '');
    return (
      mobileLines.find((mobileLine) => mobileLine.msisdn === queryMobileLine) ||
      mobileLines.find((mobileLine) => mobileLine.msisdn === storedMobileLine) ||
      mobileLines[0]
    );
  }

  selectMobileLine(mobileLine?: MobileLine): void {
    if (mobileLine) {
      this.selectedMobileLine = mobileLine;
      this.mobileLineSelected.emit(mobileLine);
      sessionStorage.setItem(MobileLineSelectorComponent.MOBILE_LINE_STORAGE_KEY, mobileLine.msisdn);
      this.close();
    }
  }

  close() {
    this.showMenu = false;
  }

  open(event: Event) {
    event.stopPropagation();
    this.showMenu = true;
  }
}
