import { Injectable } from '@angular/core';
import { ProductMapper } from './product.mapper';
import { SalesOfferInterface } from '../interfaces/sales-offer.interface';
import { SalesOfferModel } from '../models/sales-offer.model';
import { ProductInterface } from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class SalesOfferMapper {
  constructor(private readonly productMapper: ProductMapper) {}

  public map(rawSalesOffer: SalesOfferInterface): SalesOfferModel {
    const salesOffer: SalesOfferModel = new SalesOfferModel();

    salesOffer.products = this.mapProducts(rawSalesOffer.products);
    salesOffer.ownedProducts = this.mapProducts(rawSalesOffer.ownedProducts);
    salesOffer.standaloneOptions = this.mapProducts(rawSalesOffer.standaloneOptions);

    return salesOffer;
  }

  private mapProducts(rawProducts: ProductInterface[]) {
    const products: ProductModel[] = [];

    if (rawProducts) {
      rawProducts.forEach((rawProduct) => products.push(this.productMapper.map(rawProduct)));
    }

    return products;
  }
}
