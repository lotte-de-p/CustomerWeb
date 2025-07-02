import { Injectable } from '@angular/core';
import {
  MockCreateSalesOrderRequest,
  MockCreateSalesOrderRequestBody,
  MockSelectedProductInterface,
} from '../models/mock-create-sales-order-request.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockProductsService {
  mockSelectedProducts: MockSelectedProductInterface[] = [];
  mockOffersArr: MockCreateSalesOrderRequest = { offers: [] };

  addProducts(selectedProducts: MockSelectedProductInterface, offers: MockCreateSalesOrderRequestBody): void {
    this.mockSelectedProducts.push(selectedProducts);
    this.mockOffersArr.offers.push(offers);
  }

  getAllProducts(): Observable<MockSelectedProductInterface[]> {
    return of(this.mockSelectedProducts);
  }

  getOffers(): Observable<MockCreateSalesOrderRequest> {
    return of(this.mockOffersArr);
  }

  deleteProduct(index: number): void {
    this.mockSelectedProducts.splice(index, 1);
    this.mockOffersArr.offers.splice(index, 1);
  }
}
