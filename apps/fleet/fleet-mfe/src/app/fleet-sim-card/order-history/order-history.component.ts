import { ChangeDetectionStrategy, Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AbstractBaseComponent, LoaderService } from '@telenet/ng-lib-page';
import { OrderHistoryConstants } from './constants/order-history.constants';
import { Observable } from 'rxjs';
import { OrderHistoryModel, OrderItem, OrderItemValidation } from './models/order-history.model';
import { OrderHistoryService } from './service/order-history.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  selector: 'tg-order-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-history.component.html',
  standalone: true,
  imports: [LoginModule, NgIf, NgFor, NgClass, TranslateModule, AsyncPipe],
})
export class OrderHistoryComponent extends AbstractBaseComponent {
  messageGroupName = OrderHistoryConstants.MESSAGE_GROUP;
  scopes = OrderHistoryConstants.SCOPES;
  failedOrders$: Observable<OrderHistoryModel[]> | undefined;
  toggledItems = new Array<string>();

  constructor(
    private readonly orderHistoryService: OrderHistoryService,
    private readonly loaderService: LoaderService
  ) {
    super();
  }

  initAfterLoggedIn(): void {
    this.failedOrders$ = this.getCustomerFailedOrderHistory();
  }

  toggle(identifier: string): void {
    this.isToggled(identifier) ? this.removeElement(identifier) : this.addElement(identifier);
  }

  isToggled(identifier: string): boolean {
    return this.toggledItems.includes(identifier);
  }

  hasAny(array: OrderHistoryModel[] | OrderItem[] | OrderItemValidation[]): boolean {
    return array.length > 0;
  }

  private addElement(identifier: string): void {
    this.toggledItems.push(identifier);
  }

  private removeElement(identifier: string): void {
    this.toggledItems.splice(this.toggledItems.indexOf(identifier), 1);
  }

  private getCustomerFailedOrderHistory(): Observable<OrderHistoryModel[]> {
    this.loaderService.start();
    return this.obs(
      this.orderHistoryService
        .getOrderHistory(this.messageGroupName, OrderHistoryConstants.STATUS_FAILED)
        .pipe(finalize(() => this.loaderService.stop()))
    );
  }
}
