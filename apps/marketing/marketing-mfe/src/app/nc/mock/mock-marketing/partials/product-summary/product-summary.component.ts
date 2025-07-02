import { Component, Input, OnInit } from '@angular/core';
import { MockProductsService } from '../../services/mock-products.service';
import {
  MockCreateSalesOrderRequest,
  MockSelectedProductInterface,
} from '../../models/mock-create-sales-order-request.model';
import { combineLatest } from 'rxjs';
import { upperCase } from 'lodash-es';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import { ProductTypeEnum } from '../../../../../http/netcracker/sales/enums/product-type.enum';
import { SalesRedirectUrlBuilderFactory } from '../../models/sales-redirect-url.builder';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass, NgFor } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'tg-marketing-nc-mock-product-summary',
  templateUrl: './product-summary.component.html',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, TranslateModule],
})
export class ProductSummaryComponent implements OnInit {
  chevronExpanded = false;
  noOfProductsAdded: number;
  selectedProducts: MockSelectedProductInterface[];
  @Input() salesUrl: string;

  constructor(
    private readonly mockProductsService: MockProductsService,
    private readonly urlService: UrlService,
    private readonly jsonUrlService: JsonUrlService
  ) {}

  ngOnInit(): void {
    this.mockProductsService
      .getAllProducts()
      .pipe(untilDestroyed(this))
      .subscribe((products: MockSelectedProductInterface[]) => {
        this.selectedProducts = products;
      });
  }

  submit() {
    combineLatest([this.mockProductsService.getAllProducts(), this.mockProductsService.getOffers()])
      .pipe(untilDestroyed(this))
      .subscribe((details) => {
        this.setRequestJSONAndRedirect(details[0], details[1]);
      });
  }

  private setRequestJSONAndRedirect(
    selectedProduct: MockSelectedProductInterface[],
    selectedOffers: MockCreateSalesOrderRequest
  ): void {
    let redirectUrl = '';
    let cid_campaign = false;
    this.jsonUrlService
      .compress(selectedOffers)
      .pipe(untilDestroyed(this))
      .subscribe((compressedJSON: unknown) => {
        redirectUrl = this.salesUrl + '?flow=marketing&sdata=' + compressedJSON;
        const products = selectedProduct;
        const manualDiscount = products[0].manualDiscount;
        if (manualDiscount && manualDiscount.type && manualDiscount.discountCode) {
          this.salesUrl = this.salesUrl + '?' + manualDiscount.type + '=' + manualDiscount.discountCode.trim();
          cid_campaign = true;
        }
        redirectUrl = SalesRedirectUrlBuilderFactory.buildRedirection()
          .addFlowParam(this.salesUrl, cid_campaign)
          .addIntentParam(this.decideIntent(products[0]))
          .addSDataParam(compressedJSON)
          .build();

        this.urlService.redirectTo(redirectUrl);
      });
  }

  private decideIntent(product: MockSelectedProductInterface): string {
    const calcualteIntent = upperCase(product.product.type) === ProductTypeEnum.DOMAIN_NAME ? 'domain-name' : '';
    return product.isProductTypeHardwareCheck ? 'hardware' : calcualteIntent;
  }

  deleteProduct(index: number) {
    this.mockProductsService.deleteProduct(index);
  }

  expandChevron() {
    this.chevronExpanded = !this.chevronExpanded;
  }
}
