import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../entities/models/product.model';
import { ProductTestfactory } from './product.testfactory';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(new ProductTestfactory().getProductsMockWithBundle());
  }
}
