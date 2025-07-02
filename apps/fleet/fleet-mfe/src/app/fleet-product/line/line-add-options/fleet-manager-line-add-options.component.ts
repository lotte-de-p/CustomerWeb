import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LineAddOptionsConstants } from '../shared/constants/line-add-options.constants';
import { AbstractBaseComponent, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import isEmpty from 'lodash-es/isEmpty';
import { forkJoin, Observable } from 'rxjs';
import { filter, finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { MessageService, MessagesModule, MessageType } from '@telenet/ng-lib-message';
import cloneDeep from 'lodash-es/cloneDeep';
import { EligibleProductInterface } from '../../../shared/common/interfaces/products/eligible-product.interface';
import { EligibleProductsService } from '../../../shared/common/services/products/eligible-products.service';
import { FleetMessageService } from '../shared/services/message/fleet-message.service';
import { FleetManagerAvailableOptionComponent } from './views/available-option/fleet-manager-available-option.component';
import { TranslateModule } from '@ngx-translate/core';
import { FleetManagerStickyActionsComponent } from './views/sticky-actions/fleet-manager-sticky-actions.component';
import { FleetManagerLineItemComponent } from './views/line-item/fleet-manager-line-item.component';
import { FleetManagerWarningMessageComponent } from './views/warning-message/fleet-manager-warning-message.component';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerProductHolding } from '../shared/models/customer-product-holding.model';
import { SalesNgrxModule } from '../shared/store/sales/state/sales/sales-ngrx.module';
import { ProductOptionsMapService } from '../shared/services/product/product-options-map.service';
import { LineRemoveConstants } from '../line-remove-options/constants/line-remove-constants';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { ProductsService } from '../shared/services/product/products.service';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { ManagerAddOptionsService } from './services/manager-add-options.service';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { FleetManagerLineOverlayComponent } from '../line-overlay/fleet-manager-line-overlay.component';
import { FleetManagerResultMessageComponent } from '../shared/components/result-message/fleet-manager-result-message.component';

@Component({
  selector: 'tg-fleet-manager-line-add-options',
  templateUrl: './fleet-manager-line-add-options.component.html',
  standalone: true,
  styles: [],
  imports: [
    SalesNgrxModule,
    FormsModule,
    CommonModule,
    MessagesModule,
    FleetManagerAvailableOptionComponent,
    FleetManagerStickyActionsComponent,
    FleetManagerWarningMessageComponent,
    FleetManagerLineItemComponent,
    TranslateModule,
    NgClass,
    LoginModule,
    FleetManagerLineOverlayComponent,
    LoaderModule,
    FleetManagerResultMessageComponent,
  ],
})
export class FleetManagerLineAddOptionsComponent extends AbstractBaseComponent {
  @Input() redirectUrl: string;
  @Input() toggleClass: boolean;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  @Output() closeOverlay: EventEmitter<void> = new EventEmitter<void>();

  productIdentifier: string;
  salesOrderResponse;
  category;
  stickyContainer = false;
  initialSelectedLines: CustomerProductHolding[] = [];
  showFilteredLines = false;
  initialLineOptions = [];
  toggleContainer = false;
  optionProducts = [];
  messageGroup: string = LineAddOptionsConstants.MESSAGE_GROUP;
  msisdns: string[];
  scopes = ['productholding'];

  readonly #urlService = inject(UrlService);
  readonly #messageService = inject(MessageService);
  readonly #eligibleProductService = inject(EligibleProductsService);
  readonly #productOptionsMapService = inject(ProductOptionsMapService);
  readonly #productsService = inject(ProductsService);
  readonly #loaderService = inject(LoaderService);
  readonly #fleetMessageService = inject(FleetMessageService);
  readonly #dataLayerService = inject(DataLayerService);
  readonly #addOptionsService = inject(ManagerAddOptionsService);

  productLineOptions = this.#addOptionsService.productLineOptions;
  selectedLines = this.#addOptionsService.selectedLines;
  isShowWarning = this.#addOptionsService.showWarning;

  initAfterLoggedIn(): void {
    this.msisdns = this.#urlService.getRequestParamValue(LineAddOptionsConstants.MSISDN, '').split(',');

    this.obs(this.getProducts()).subscribe((products: CustomerProductHolding[]) => {
      products.map(() => this.#productOptionsMapService.mapOptionCategory(products));
      this.pushPageStepDataToAnalytics(LineRemoveConstants.STEP_ID_REMOVE_OPTION_OVERLAY);
      this.#addOptionsService.addEventToUDL(
        LineRemoveConstants.EVENT_NAME_CHANGE_LINE_DETAILS_STARTED,
        'self-service-flow-start',
        products
      );
      this.#addOptionsService.setSelectedLineData(cloneDeep(products));
      this.getLineOptions(this.msisdns[0]);
    });
    this.#messageService.clearMessages(LineRemoveConstants.MESSAGE_GROUP);
  }

  getProducts(): Observable<CustomerProductHolding[]> {
    this.#loaderService.start();
    return forkJoin(
      this.msisdns.map((msisdn) =>
        this.#productsService.getProductByIdentifier(ProductOverviewConstants.MESSAGE_GROUP, msisdn).pipe(
          map((product) => {
            return product;
          }),
          finalize(() => this.#loaderService.stop())
        )
      )
    );
  }

  getLineOptions(msisdn: string): void {
    console.log('line options', msisdn);
    this.#loaderService.start();
    this.#eligibleProductService
      .getEligibleProductsByIdentifier(LineAddOptionsConstants.MESSAGE_GROUP, msisdn)
      .pipe(finalize(() => this.#loaderService.stop()))
      .subscribe({
        next: (response: EligibleProductInterface[]) => {
          this.#addOptionsService.setProductLineData(this.#productOptionsMapService.groupOptionsByCategory(response));
          this.#addOptionsService.disableOptions();
        },
        error: (error) => {
          this.#fleetMessageService.showError(error, this.messageGroup);
        },
      });
  }

  hasAffectedLine(): boolean {
    const affectedLine = this.selectedLines().filter((selectedLine) => {
      return selectedLine.isAffected;
    });
    if (!affectedLine) {
      this.showFilteredLines = false;
    }
    return !isEmpty(affectedLine);
  }

  toggleStickyContainer(): void {
    this.stickyContainer = !this.stickyContainer;
  }

  revertChanges(): void {
    this.#addOptionsService.revertChanges();
  }

  showWarningContent(): void {
    this.#addOptionsService.showWarning.set(true);
  }

  getOptions(selectedLines) {
    const options = [];
    selectedLines.forEach((selectedLine) => {
      selectedLine.options.forEach((option) => {
        options.push(option);
      });
    });
    return options;
  }

  toggleContainerData(toggleContainer): void {
    this.toggleContainer = toggleContainer;
  }

  closeOverLay(): void {
    this.closeOverlay.emit();
  }

  backToProductOverview(): void {
    this.#urlService.doHistoryBack();
  }

  pushPageStepDataToAnalytics(stepId: string): void {
    const attributes: DataLayerAttributes = {} as DataLayerAttributes;
    attributes.stepId = stepId;
    attributes.intent = LineRemoveConstants.EVENT_ATTRIBUTE_INTENT_REMOVE_OPTION;
    this.#dataLayerService.addStepViewEvent(attributes);
  }

  saveChanges(): void {
    this.#loaderService.start();
    this.#addOptionsService
      .submitOptions()
      .pipe(
        filter((response) => response.success),
        switchMap((response) => this.#addOptionsService.submitSalesOrder(response)),
        finalize(() => this.#loaderService.stop()),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (response) => {
          this.#addOptionsService.showWarning.set(false);
          if (response.success) {
            this.#addOptionsService.addEventToUDL(
              LineRemoveConstants.EVENT_NAME_LINE_DETAILS_CHANGED,
              'self-service-flow-end',
              this.selectedLines(),
              response
            );
            this.#fleetMessageService.showSuccess(this.messageGroup, LineRemoveConstants.SUCCESS_MESSAGE);
            this.#urlService.doHistoryBack();
          } else {
            this.#fleetMessageService.showError(response.error, this.messageGroup);
          }
        },
        error: (error) => {
          this.#fleetMessageService.showError(error, this.messageGroup);
          this.#addOptionsService.showWarning.set(false);
        },
      });
  }

  hasErrorOrSuccessMessage() {
    return (
      this.#messageService.hasErrorMessages(this.messageGroup) ||
      this.#messageService.hasMessagesOfType(this.messageGroup, MessageType.SUCCESS)
    );
  }

  redirect(): void {
    this.#loaderService.start();
    this.#urlService.redirectTo(this.redirectUrl);
  }
}
