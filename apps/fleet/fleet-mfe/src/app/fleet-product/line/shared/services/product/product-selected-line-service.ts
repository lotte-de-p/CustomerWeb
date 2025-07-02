import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CustomerProductHolding } from '../../models/customer-product-holding.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSelectedLineService {
  private readonly selectedLines: ReplaySubject<CustomerProductHolding[]>;
  private readonly selectedMsisdn: ReplaySubject<string>;

  constructor() {
    this.selectedLines = new ReplaySubject(1);
    this.selectedMsisdn = new ReplaySubject(1);
  }

  getSelectedLines(): ReplaySubject<CustomerProductHolding[]> {
    return this.selectedLines;
  }

  setSelectedLines(selectedLines: CustomerProductHolding[]): void {
    this.selectedLines.next(selectedLines);
  }

  getSelectedMsisdn(): ReplaySubject<string> {
    return this.selectedMsisdn;
  }

  setSelectedMsisdn(msisdn: string): void {
    this.selectedMsisdn.next(msisdn);
  }
}
