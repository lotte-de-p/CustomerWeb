import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { ProductsDetailsRowContainerFacade } from '@sales/products-details/data-access';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-products-details-row-container',
  standalone: true,
  templateUrl: './products-details-row-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ImageSrcInterceptorDirective, NgIf, AsyncPipe, TranslateModule],
})
export class ProductsDetailsRowContainerComponent {
  isInternetRowVisible$: Observable<boolean> = this.productsDetailsRowContainerFacade.isInternetRowVisible$;
  isTvIconicRowVisible$: Observable<boolean> = this.productsDetailsRowContainerFacade.isTvIconicRowVisible$;
  isTvFlowRowVisible$: Observable<boolean> = this.productsDetailsRowContainerFacade.isTvFlowRowVisible$;
  isMobileRowVisible$: Observable<boolean> = this.productsDetailsRowContainerFacade.isMobileRowVisible$;
  isFixedTelephoneRowVisible$: Observable<boolean> = this.productsDetailsRowContainerFacade.isFixedTelephoneRowVisible$;

  constructor(private readonly productsDetailsRowContainerFacade: ProductsDetailsRowContainerFacade) {}
}
