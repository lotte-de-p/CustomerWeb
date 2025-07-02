import { Component, inject, Input } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { MessageService, MessageType } from '@telenet/ng-lib-message';
import { filter, finalize, map, takeUntil } from 'rxjs/operators';
import { AbstractBaseComponent, AssetService, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { LineRemoveConstants } from './constants/line-remove-constants';
import { ProductOptionsMapService } from '../shared/services/product/product-options-map.service';
import { FleetMessageService } from '../shared/services/message/fleet-message.service';
import { EligibleProductInterface } from '../shared/interfaces/eligible-product.interface';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FleetManagerSelectedLineListComponent } from './views/selected-line-list/selected-line-list.component';
import { ManagerRemoveOptionsService } from './services/manager-remove-options.service';
import cloneDeep from 'lodash-es/cloneDeep';
import { FleetManagerOptionsOverviewComponent } from './views/options-overview/options-overview.component';
import { EligibleProductsService } from '../../../shared/common/services/products/eligible-products.service';
import { forkJoin, Observable } from 'rxjs';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { ProductsService } from '../shared/services/product/products.service';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { FleetManagerLineOverlayComponent } from '../line-overlay/fleet-manager-line-overlay.component';
import { FleetManagerStickyActionsComponent } from '../shared/components/sticky-actions/sticky-actions.component';
import { FleetManagerWarningMessageComponent } from '../shared/components/warning-message/warning-message.component';
import { CustomerProductHolding } from '../shared/models/customer-product-holding.model';
import { Option } from '../shared/models/option.model';
import { FleetManagerResultMessageComponent } from '../shared/components/result-message/fleet-manager-result-message.component';

@Component({
  selector: 'tg-fleet-manager-line-remove-options',
  standalone: true,
  templateUrl: './fleet-manager-line-remove-options.component.html',
  imports: [
    TranslateModule,
    InlineSVGModule,
    FleetManagerStickyActionsComponent,
    FleetManagerSelectedLineListComponent,
    NgClass,
    FormsModule,
    FleetManagerWarningMessageComponent,
    FleetManagerOptionsOverviewComponent,
    FleetManagerLineOverlayComponent,
    LoginModule,
    LoaderModule,
    FleetManagerResultMessageComponent,
  ],
})
export class FleetManagerLineRemoveOptionsComponent extends AbstractBaseComponent {
  @Input() previousUrl: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  readonly #dataLayerService = inject(DataLayerService);
  readonly #loaderService = inject(LoaderService);
  readonly #messageService = inject(MessageService);
  readonly #productOptionsMapService = inject(ProductOptionsMapService);
  readonly #fleetMessageService = inject(FleetMessageService);
  readonly #removeOptionsService = inject(ManagerRemoveOptionsService);
  readonly #eligibleProductService = inject(EligibleProductsService);
  readonly #productsService = inject(ProductsService);
  readonly #urlService = inject(UrlService);

  productLineOptions = this.#removeOptionsService.productLineOptions;
  selectedLines = this.#removeOptionsService.selectedLines;
  isShowWarning = this.#removeOptionsService.showWarning;

  msisdns = this.#urlService.getRequestParamValue(LineRemoveConstants.MSISDN, '').split(',');

  warningImage = AssetService.getImagePath('FLEET_REMOVE_OPTIONS', 'warning-image.svg');
  warningImageMobile = AssetService.getImagePath('FLEET_REMOVE_OPTIONS', 'warning-image-mobile.svg');
  messageGroup = LineRemoveConstants.MESSAGE_GROUP;
  scopes = ['productholding'];

  initAfterLoggedIn(): void {
    this.obs(this.getProducts()).subscribe((products: CustomerProductHolding[]) => {
      products.map(() => this.#productOptionsMapService.mapOptionCategory(products));
      this.pushPageStepDataToAnalytics(LineRemoveConstants.STEP_ID_REMOVE_OPTION_OVERLAY);
      this.#removeOptionsService.addEventToUDL(
        LineRemoveConstants.EVENT_NAME_CHANGE_LINE_DETAILS_STARTED,
        'self-service-flow-start',
        products
      );
      this.#removeOptionsService.setSelectedLineData(cloneDeep(products));
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
            return {
              isOptionRemoved: false,
              ...product,
            };
          }),
          finalize(() => this.#loaderService.stop())
        )
      )
    );
  }

  getLineOptions(msisdn: string): void {
    this.#loaderService.start();
    this.#eligibleProductService
      .getEligibleProductsByIdentifier(LineRemoveConstants.MESSAGE_GROUP, msisdn)
      .pipe(
        finalize(() => this.#loaderService.stop()),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (eligibleProducts: EligibleProductInterface[]) => {
          this.#removeOptionsService.setProductLineData(
            this.#productOptionsMapService.groupOptionsByCategory(eligibleProducts)
          );
          this.#removeOptionsService.disableOptions();
        },
        error: (error) => {
          this.#fleetMessageService.showError(error, this.messageGroup);
        },
      });
  }

  saveChanges(): void {
    this.#loaderService.start();
    this.#removeOptionsService
      .submitOptions()
      .pipe(
        filter((response) => response.success),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (response) => {
          this.#removeOptionsService
            .submitSalesOrder(response)
            .pipe(
              finalize(() => this.#loaderService.stop()),
              takeUntil(this.unsubscribe$)
            )
            // eslint-disable-next-line rxjs/no-nested-subscribe
            .subscribe({
              next: (response) => {
                this.#removeOptionsService.showWarning.set(false);
                if (response.success) {
                  this.#removeOptionsService.addEventToUDL(
                    LineRemoveConstants.EVENT_NAME_LINE_DETAILS_CHANGED,
                    'self-service-flow-end',
                    this.selectedLines(),
                    response
                  );
                  this.#fleetMessageService.showSuccess(this.messageGroup, LineRemoveConstants.SUCCESS_MESSAGE);
                } else {
                  this.#fleetMessageService.showError(response.error, this.messageGroup);
                }
              },
              error: (error) => {
                this.#fleetMessageService.showError(error, this.messageGroup);
                this.#removeOptionsService.showWarning.set(false);
              },
            });
        },
        error: (error) => {
          this.#fleetMessageService.showError(error, this.messageGroup);
          this.#removeOptionsService.showWarning.set(false);
        },
      });
  }

  cancelChanges(): void {
    this.#removeOptionsService.showWarning.set(false);
  }

  revertChanges = (): void => {
    this.#removeOptionsService.revertChanges();
  };

  showWarning(): void {
    this.#removeOptionsService.showWarning.set(true);
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

  updateOptions($event: Option[]) {
    this.#removeOptionsService.updateOptions($event);
  }

  hasErrorOrSuccessMessage() {
    return (
      this.#messageService.hasErrorMessages(this.messageGroup) ||
      this.#messageService.hasMessagesOfType(this.messageGroup, MessageType.SUCCESS)
    );
  }

  hasAffected() {
    return !!this.selectedLines().find((line) => line.isAffected);
  }
}
