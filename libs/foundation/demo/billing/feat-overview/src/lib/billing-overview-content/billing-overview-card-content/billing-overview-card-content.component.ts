import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Invoice, InvoiceStatus } from '@demo/billing/data-access';
import { DatePipe, NgIf } from '@angular/common';
import { ButtonComponent } from '@demo/billing/ui';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { WinkButton } from '@telenet/wink-ng';

@Component({
  standalone: true,
  selector: 'tg-demo-billing-overview-card-content',
  imports: [DatePipe, NgIf, ButtonComponent, TgTranslateTestingModule, WinkButton],
  styleUrls: ['./billing-overview-card-content.component.scss'],
  template: `
    <div class="pt--xxxs" [attr.data-testid]="'invoice-card-content'">
      <div class="row mt--default--lg pl--xxxs">
        <div class="col--4"></div>
        <div class="col--18">
          <div class="mb--l">
            <p [attr.data-testid]="'invoice-description'" style="white-space: pre-wrap" class="text--m mb--m">
              {{ invoice.description }}
            </p>
            <div class="mt--default--lg text--m">{{ 'ng.billing-overview.lbl.reception-date' | translate }}</div>
            <div class="mb--default--lg text--m text-weight--g mb--m">
              {{ invoice.invoiceDate | date: 'dd/MM/yyyy' }}
            </div>

            <wink-button
              *ngIf="showPayNowButton"
              text="{{ 'ng.billing-overview.lbl.pay-now' | translate }}"
              element="button"
              type="button"
              appearance="primary"
              size="sm"
              width="full"
              status="none"
              [attr.data-testid]="'invoice-open-file'"
              (click)="this.payInvoice.emit(invoice)"
              [attr.data-testid]="'invoice-pay-now'"></wink-button>
            <br />
            <wink-button
              *ngIf="invoice.openFileLink"
              text="{{ 'ng.billing-overview.lbl.open-file' | translate }}"
              element="button"
              type="button"
              appearance="secondary"
              size="sm"
              width="full"
              status="none"
              icon="map-search"
              icon-position="left"
              (click)="$event.stopPropagation()"
              [attr.data-testid]="'invoice-open-file'">
            </wink-button>
          </div>
          <div class="mb--l display--flex gap--m"></div>
        </div>
        <div class="col--2"></div>
      </div>
    </div>
  `,
})
export class BillingOverviewCardContentComponent implements OnChanges {
  @Input() invoice: Invoice = {} as Invoice;
  @Output() payInvoice = new EventEmitter<Invoice>();

  showPayNowButton = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['invoice']) {
      this.showPayNowButton = this.invoice.status !== InvoiceStatus.PAID;
    }
  }
}
