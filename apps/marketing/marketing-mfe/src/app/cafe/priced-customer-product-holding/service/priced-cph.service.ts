import { Injectable } from '@angular/core';
import { ProductHolding } from '../../../http/cafe/product-holding/models/product-holding.model';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { PricedCphItem, PricedCphOverview, PricedCphSpec } from '../model/priced-cph-data.model';
import { Option } from '../../../http/cafe/product-holding/models/option.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { CafeBill } from '../../../http/cafe/bills/interfaces/cafe-bill.interface';
import { CafeBillsUtil } from '../../../http/cafe/bills/utils/cafe-bills.util';
import { SpecificationsMapperService } from './specifications-mapper.service';

@Injectable({
  providedIn: 'root',
})
export class PricedCphService {
  private static readonly MAX_WEIGHT = 999;

  constructor(private readonly specificationsMapperService: SpecificationsMapperService) {}

  public getOverview(productHolding: ProductHolding, bills: CafeBill[]): PricedCphOverview[] {
    const overviews = [];
    if (productHolding.products && productHolding.products.length > 0) {
      const products = this.getVisibleProductsOnFirstInstallationAddress(productHolding);
      if (products.length === 0) {
        return this.defaultOverviews();
      }
      const accountNumbers: number[] = this.getFlattenedUniqueAccountNumbers(productHolding);
      for (const accountNumber of accountNumbers) {
        let cphOverview: PricedCphOverview = this.getCphOverview(products, accountNumber);
        cphOverview =
          bills.length > 0 && cphOverview.products.length > 0
            ? this.enrichWithPrice(cphOverview, bills, accountNumber)
            : cphOverview;
        overviews.push(cphOverview);
      }
      return overviews;
    } else {
      return this.defaultOverviews();
    }
  }

  private defaultOverviews(): PricedCphOverview[] {
    return [
      {
        products: [],
        options: [],
      },
    ];
  }

  private getFlattenedUniqueAccountNumbers(productHolding: ProductHolding): number[] {
    const accountNumbers = productHolding.products.reduce(
      (acc: number[], val: Product) => acc.concat(val.accountNumber),
      []
    );
    return Array.from(new Set(accountNumbers));
  }

  private getCphOverview(products: Product[], accountNumber: number): PricedCphOverview {
    return {
      products: this.getProducts(products, accountNumber).sort(this.sortByWeight()).reduce(this.groupThem, []),
      options: this.getOptions(products, accountNumber).sort(this.sortByWeight()).reduce(this.groupThem, []),
    };
  }

  private getVisibleProductsOnFirstInstallationAddress(productHolding: ProductHolding): Product[] {
    const firstInstallationAddress = productHolding.installationAddresses[0];
    const productsForAddress = productHolding.getProductsForAddress(productHolding.products, firstInstallationAddress);

    return this.filterInvisibleProducts(productsForAddress);
  }

  private filterInvisibleProducts(products: Product[]): Product[] {
    const filteredProducts = products.filter((product) => (product.productInfo ? product.productInfo.visible : false));

    filteredProducts.forEach((product) => {
      product.options = product.options.filter((option) => (option.productInfo ? option.productInfo.visible : false));
      product.products = this.filterInvisibleProducts(product.products);
    });

    return filteredProducts;
  }

  private getProducts(products: Product[], accountNumber: number): PricedCphItem[] {
    return products
      .filter((product) => product.accountNumber === accountNumber)
      .map((product: Product) => {
        const productInfo = product.productInfo;
        return {
          key: product?.productInfo?.name,
          amount: 1,
          weight: productInfo && this.getWeight(productInfo),
          specifications: this.getSpecifications(product),
        } as PricedCphItem;
      });
  }

  private getSpecifications(product: Product): PricedCphSpec[] {
    if (product?.productInfo?.isBundle()) {
      return product.products
        .map((subProduct) => this.specificationsMapperService.map(subProduct, product))
        .sort(this.sortByWeight())
        .reduce(this.groupThem, []) as PricedCphSpec[];
    }
    const mappedProduct = this.specificationsMapperService.map(product);

    if (mappedProduct) {
      return [mappedProduct];
    }

    return [];
  }

  private getOptions(products: Product[], accountNumber?: number): PricedCphItem[] {
    if (accountNumber) {
      products = products.filter((product) => product.accountNumber === accountNumber);
    }
    return products.map((product: Product) => this.mapOptions(product)).flatMap((product) => product);
  }

  private mapOptions(product: Product): PricedCphItem[] {
    return [
      ...product.options.map((option: Option) => {
        const productInfo = option?.productInfo;
        return {
          key: option?.productInfo?.name,
          amount: 1,
          weight: productInfo && this.getWeight(productInfo),
        } as PricedCphItem;
      }),
      ...this.mapBundleOptions(product),
    ];
  }

  private mapBundleOptions(product: Product): PricedCphItem[] {
    if (product?.productInfo?.isBundle()) {
      return this.getOptions(product.products);
    }
    return [];
  }

  private groupThem(
    accum: (PricedCphItem | PricedCphSpec)[],
    each?: PricedCphItem | PricedCphSpec
  ): (PricedCphItem | PricedCphSpec)[] {
    if (!each) return accum;
    const existingItem = accum.find((pricedItem) => pricedItem.key === each.key);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      accum.push(each);
    }
    return accum;
  }

  private enrichWithPrice(overview: PricedCphOverview, bills: CafeBill[], accountNumber: number): PricedCphOverview {
    if (bills.length > 0 && CafeBillsUtil.hasBillsForAccount(String(accountNumber), bills)) {
      const statement = CafeBillsUtil.retrieveLastBillStatementByAccountNumber(String(accountNumber), bills);
      overview.lastBillPrice = String(statement.billamount.amount);
    }
    return overview;
  }

  private sortByWeight() {
    return (a?: PricedCphItem | PricedCphSpec, b?: PricedCphItem | PricedCphSpec) => {
      if (a && b) {
        return a.weight - b.weight;
      }
      return 0;
    };
  }

  private getWeight(omapiProduct: OmapiProduct): number {
    return omapiProduct && omapiProduct.weight ? omapiProduct.weight : PricedCphService.MAX_WEIGHT;
  }
}
