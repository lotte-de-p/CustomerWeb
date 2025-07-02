import { Component, inject, Input } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { MessageService, MessageType } from '@telenet/ng-lib-message';
import { filter, finalize, map, takeUntil, tap } from 'rxjs/operators';
import { AbstractBaseComponent, AssetService, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { Option, Product } from '../../shared/models/product.model';
import { LineRemoveConstants } from './constants/line-remove-constants';
import { ProductOptionsMapService } from '../../shared/services/product/product-options-map.service';
import { FleetUserMessageService } from '../../shared/services/message/fleet-user-message.service';
import { EligibleProductInterface } from '../../shared/interfaces/eligible-product.interface';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AsyncPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FleetUserStickyActionsComponent } from '../shared/components/sticky-actions/sticky-actions.component';
import { FleetUserSelectedLineListComponent } from './views/selected-line-list/selected-line-list.component';
import { FleetUserWarningMessageComponent } from '../shared/components/warning-message/fleet-user-warning-message.component';
import { RemoveOptionsService } from './services/remove-options.service';
import cloneDeep from 'lodash-es/cloneDeep';
import { FleetUserOptionsOverviewComponent } from './views/options-overview/fleet-user-options-overview.component';
import { EligibleProductsService } from '../../../shared/common/services/products/eligible-products.service';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { FleetUserLineOverlayComponent } from '../shared/components/line-overlay/fleet-user-line-overlay.component';
import { FleetUserResultMessageComponent } from '../shared/components/result-message/fleet-user-result-message.component';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { FleetUserWizardGuardService } from '../shared/services/fleet-user-wizard-guard.service';
import { FleetUserLineItemComponent } from '../line-add-options/views/line-item/fleet-user-line-item.component';
import { FleetUserMobileActionButtonsComponent } from '../shared/components/mobile-action-buttons/fleet-user-mobile-action-buttons.component';

@Component({
  selector: 'tg-fleet-user-line-remove-options',
  standalone: true,
  templateUrl: './fleet-user-line-remove-options.component.html',
  styleUrls: ['./fleet-user-line-remove-options.component.css'],
  imports: [
    TranslateModule,
    InlineSVGModule,
    FleetUserStickyActionsComponent,
    FleetUserSelectedLineListComponent,
    NgClass,
    FormsModule,
    FleetUserStickyActionsComponent,
    FleetUserWarningMessageComponent,
    FleetUserWarningMessageComponent,
    FleetUserOptionsOverviewComponent,
    FleetUserLineOverlayComponent,
    FleetUserResultMessageComponent,
    LoginModule,
    LoaderModule,
    AsyncPipe,
    FleetUserLineItemComponent,
    FleetUserMobileActionButtonsComponent,
  ],
})
export class FleetUserLineRemoveOptionsComponent extends AbstractBaseComponent {
  @Input() productOverviewUrl: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  readonly #dataLayerService = inject(DataLayerService);
  readonly #loaderService = inject(LoaderService);
  readonly #messageService = inject(MessageService);
  readonly #productOptionsMapService = inject(ProductOptionsMapService);
  readonly #fleetMessageService = inject(FleetUserMessageService);
  readonly #removeOptionsService = inject(RemoveOptionsService);
  readonly #eligibleProductService = inject(EligibleProductsService);
  readonly #urlService = inject(UrlService);
  readonly #wizardGuardService = inject(FleetUserWizardGuardService);

  productLineOptions = this.#removeOptionsService.productLineOptions;
  selectedLine = this.#removeOptionsService.selectedLine;
  isShowWarning = this.#removeOptionsService.showWarning;

  warningImage = AssetService.getImagePath('FLEET_REMOVE_OPTIONS', 'warning-image.svg');
  warningImageMobile = AssetService.getImagePath('FLEET_REMOVE_OPTIONS', 'warning-image-mobile.svg');
  messageGroup = LineRemoveConstants.MESSAGE_GROUP;
  scopes = ['productholding'];
  showProduct$ = of(false);
  isFleetUserOrderingEnabled$ = of(false);
  isSourceOneApp = false;
  showAvailableOptionsContainer = true;

  initAfterLoggedIn(): void {
    const msisdn = this.#urlService.getRequestParamValue(ProductOverviewConstants.MSISDN_PARAM, '');
    this.isSourceOneApp =
      ProductOverviewConstants.ONE_APP_SOURCE ===
      this.#urlService.getRequestParamValue(ProductOverviewConstants.SOURCE_PARAMETER, '');
    this.showProduct$ = this.#wizardGuardService.product$(this.messageGroup, msisdn).pipe(
      tap((product: Product) => {
        if (product) {
          this.pushPageStepDataToAnalytics(LineRemoveConstants.STEP_ID_REMOVE_OPTION_OVERLAY);
          this.#removeOptionsService.addEventToUDL(
            LineRemoveConstants.EVENT_NAME_CHANGE_LINE_DETAILS_STARTED,
            'self-service-flow-start',
            product
          );
          this.#removeOptionsService.setSelectedLineData(cloneDeep(product));
          this.getLineOptions(product.identifier);
        }
      }),
      map((product: Product) => !!product)
    );

    this.isFleetUserOrderingEnabled$ = this.#wizardGuardService.isFleetUserOrderingEnabled$(this.messageGroup);
    this.#messageService.clearMessages(LineRemoveConstants.MESSAGE_GROUP);
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
                    this.selectedLine(),
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
    this.#loaderService.start();
    this.#urlService.redirectTo(this.productOverviewUrl);
  }

  pushPageStepDataToAnalytics(stepId: string): void {
    const attributes: DataLayerAttributes = {} as DataLayerAttributes;
    attributes.stepId = stepId;
    attributes.intent = LineRemoveConstants.EVENT_ATTRIBUTE_INTENT_REMOVE_OPTION;
    this.#dataLayerService.addStepViewEvent(attributes);
  }

  updateOptions($event: Option[]) {
    this.toggleAvailableOptions();
    this.#removeOptionsService.updateOptions($event);
  }

  hasErrorOrSuccessMessage() {
    return (
      this.#messageService.hasErrorMessages(this.messageGroup) ||
      this.#messageService.hasMessagesOfType(this.messageGroup, MessageType.SUCCESS)
    );
  }

  toggleAvailableOptions() {
    this.showAvailableOptionsContainer = !this.showAvailableOptionsContainer;
  }
}
