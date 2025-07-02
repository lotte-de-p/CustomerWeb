import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Invoice, InvoiceStatus } from '@demo/billing/data-access';
import {
  TableConfig,
  Sorting,
  BadgeColor,
  TableHeaderComponent,
  AccordionListComponent,
  BadgeComponent,
} from '@demo/billing/ui';
import { NgIf, DatePipe } from '@angular/common';
import { BillingOverviewCardContentComponent } from './billing-overview-card-content/billing-overview-card-content.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'tg-demo-billing-overview-content',
  imports: [
    TableHeaderComponent,
    NgIf,
    AccordionListComponent,
    BadgeComponent,
    DatePipe,
    BillingOverviewCardContentComponent,
    TranslateModule,
  ],
  styleUrls: ['./billing-overview-content.component.scss'],
  template: `
    <tg-demo-billing-table-header [config]="tableConfig" (updateSorting)="onUpdateSorting($event)">
    </tg-demo-billing-table-header>
    <div *ngIf="!displayItems()" class="text-align--center">There are no invoices available.</div>
    <tg-demo-accordion-list
      [expanded]="expanded"
      *ngIf="displayItems()"
      [items]="invoicesToShow"
      [accordionHeaderRef]="headerTemplateRef"
      rendition="panel"
      [accordionContentRef]="contentTemplateRef"
      [attr.data-testid]="'billing-panel'">
      <ng-template #headerTemplateRef let-invoice>
        <div class="col--4">
          <tg-demo-badge
            [content]="'ng.billing-overview.lbl.' + invoice.status | translate"
            [color]="getStatusBadgeColor(invoice.status)"
            [attr.data-testid]="'invoice-status'"></tg-demo-badge>
        </div>
        <div class="col--4">
          <span class="text-weight--g" [attr.data-testid]="'invoice-amount'">€ {{ invoice.amount }}</span>
        </div>
        <div class="col--11 display--flex flex-direction--column align-items--start justify-content--start">
          <p class="heading--nomargin text-align--left text-s text-flow--h6" [attr.data-testid]="'invoice-id'">
            {{ invoice.id }}
          </p>
          <p class="color-grey text--xs text-align--left" [attr.data-testid]="'invoice-companyName'">
            {{ invoice.companyName }}
          </p>
        </div>
        <div class="col--4">
          <span class="text--s" [attr.data-testid]="'invoice-expiration-date'">{{
            invoice.expirationDate | date: 'dd/MM/yyyy'
          }}</span>
        </div>
      </ng-template>

      <ng-template #contentTemplateRef let-invoice>
        <tg-demo-billing-overview-card-content
          [invoice]="invoice"
          (payInvoice)="payInvoice.emit($event)"></tg-demo-billing-overview-card-content>
      </ng-template>
    </tg-demo-accordion-list>
  `,
})
export class BillingOverviewContentComponent implements OnInit, OnChanges {
  @Input() invoices: Invoice[] = [];
  @Input() expanded = false;
  @Output() updateSorting: EventEmitter<Sorting<Invoice>> = new EventEmitter<Sorting<Invoice>>();
  @Output() payInvoice: EventEmitter<Invoice> = new EventEmitter<Invoice>();

  readonly tableConfig: TableConfig<Invoice> = {
    columns: [
      {
        property: 'status',
        translation: 'ng.billing-overview.lbl.',
        sortable: true,
        sorting: { default: true, order: 'asc' },
        cols: 4,
      },
      { property: 'amount', sortable: false, cols: 4 },
      { property: 'id', sortable: false, cols: 11 },
      { property: 'expirationDate', sortable: true, cols: 4 },
    ],
    component: 'billing-overview',
  };

  totalAmountOfPages = 0;
  pageNumber = 1;
  invoicesToShow: Invoice[] = [];

  ngOnInit() {
    this.navigateToPage(this.pageNumber);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.navigateToPage(this.pageNumber);
    }
  }

  displayItems(): boolean {
    return this.invoices.length > 0;
  }

  navigateToPage(pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.populateDataTable(this.invoices);
  }

  getStatusBadgeColor(invoiceStatus: InvoiceStatus): BadgeColor {
    let badgeColor: BadgeColor;
    switch (invoiceStatus) {
      case 'paid':
        badgeColor = 'brand';
        break;
      case 'overdue':
        badgeColor = 'dark';
        break;
      default:
        badgeColor = 'default';
        break;
    }
    return badgeColor;
  }

  onUpdateSorting(sorting: Sorting<Invoice>): void {
    this.updateSorting.emit(sorting);
  }

  private populateDataTable(invoices: Invoice[]): void {
    this.totalAmountOfPages = this.calculateTotalAmountOfPages(10, invoices.length);
    this.createPage(10, this.pageNumber);
  }

  private createPage(pageSize: number, pageNumber: number): void {
    const start = this.calculatePageStartIndex(pageSize, pageNumber);
    const end = this.calculatePageEndIndex(pageSize, pageNumber);
    this.invoicesToShow = this.invoices.slice(start, end);
  }

  private calculatePageStartIndex(pageSize: number, pageNumber: number): number {
    return (pageNumber - 1) * pageSize;
  }

  private calculatePageEndIndex(pageSize: number, pageNumber: number): number {
    return pageNumber * pageSize;
  }

  private calculateTotalAmountOfPages(pageSize: number, amountOfEntries: number): number {
    return Math.ceil(amountOfEntries / pageSize);
  }
}
