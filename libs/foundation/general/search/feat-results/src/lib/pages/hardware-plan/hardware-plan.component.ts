import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwarePlanService, Product, ProductPlan } from '@general/data-access-search';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-foundation-general-search-plan',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: ` <div class="search-product__content__plan font--caption mt--m mb--n align-items--baseline">
    <ng-container *ngIf="$plan | async as productPlan">
      {{ 'ng.search-results-page.lbl.with' | translate }} {{ productPlan?.product?.labelkey }}
    </ng-container>
  </div>`,
})
export class HardwarePlanComponent implements OnInit {
  private readonly hardwarePlanService = inject(HardwarePlanService);

  @Input() product: Product;

  $plan: Observable<ProductPlan>;

  ngOnInit(): void {
    if (this.product?.plan) {
      this.$plan = this.hardwarePlanService.getHardwarePlan(this.product.plan);
    }
  }
}
