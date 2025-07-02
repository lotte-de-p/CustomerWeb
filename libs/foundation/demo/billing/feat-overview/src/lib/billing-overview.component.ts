import { Component, inject, Input, OnInit } from '@angular/core';
import { AccordionListComponent } from '@demo/billing/ui';
import { BillingFacade, Invoice } from '@demo/billing/data-access';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BillingOverviewContentComponent } from './billing-overview-content/billing-overview-content.component';

@Component({
  standalone: true,
  imports: [AccordionListComponent, AsyncPipe, JsonPipe, BillingOverviewContentComponent],
  template: `
    <h1>{{ title }}</h1>
    <tg-demo-billing-overview-content
      [invoices]="invoices()!"
      [expanded]="expanded"
      (payInvoice)="payInvoice($event)"></tg-demo-billing-overview-content>
  `,
})
export class BillingOverviewComponent implements OnInit {
  private readonly billingFacade: BillingFacade = inject(BillingFacade);

  @Input() expanded = false;
  @Input() title = '';

  protected invoices = this.billingFacade.invoices;

  async ngOnInit(): Promise<void> {
    await this.billingFacade.loadInvoices();
  }

  payInvoice(invoice: Invoice): void {
    this.billingFacade.payInvoice(invoice);
  }
}
