import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductPlan } from '../entities/product-plan';
import { from, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HardwarePlanService {
  readonly cache = new Map<string, Promise<ProductPlan>>();

  constructor(readonly http: HttpClient) {}

  getHardwarePlan(url: string): Observable<ProductPlan> {
    if (!this.cache.has(url)) {
      this.cache.set(url, lastValueFrom(this.http.get<ProductPlan>(url)));
    }

    return from(this.cache.get(url) as Promise<ProductPlan>);
  }
}
