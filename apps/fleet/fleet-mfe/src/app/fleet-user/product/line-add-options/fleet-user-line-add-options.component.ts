import { Component, Input } from '@angular/core';
import { LineAddOptionsConstants } from '../shared/constants/line-add-options.constants';
import { AbstractBaseComponent, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import isEmpty from 'lodash-es/isEmpty';
import first from 'lodash-es/first';
import uniq from 'lodash-es/uniq';
import { of } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { MessageService, MessagesModule, MessageType } from '@telenet/ng-lib-message';
import cloneDeep from 'lodash-es/cloneDeep';
import { EligibleProductInterface } from '../../shared/interfaces/eligible-product.interface';
import { LineChangeTariffPlanConstants } from '../shared/constants/line-change-tariff-plan.constants';
import { ProductOptionsMapService } from './services/product-options-map.service';
import { ProductDatalayerService } from '../../shared/services/datalayer/product-datalayer.service';
import { FleetUserMessageService } from '../../shared/services/message/fleet-user-message.service';
import { FleetUserAvailableOptionComponent } from './views/available-option/fleet-user-available-option.component';
import { TranslateModule } from '@ngx-translate/core';
import { FleetUserStickyActionsComponent } from './views/sticky-actions/fleet-user-sticky-actions.component';
import { FleetUserLineItemComponent } from './views/line-item/fleet-user-line-item.component';
import { FleetUserWarningMessageComponent } from './views/warning-message/fleet-user-warning-message.component';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesNgrxModule } from '../shared/store/sales/state/sales/sales-ngrx.module';
import { Option, Product } from '../../shared/models/product.model';
import { EligibleProductsService } from '../../../shared/common/services/products/eligible-products.service';
import { GroupedOptions } from './models/grouped-options.model';
import { LineOption } from './models/line-option.model';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { FleetUserLineOverlayComponent } from '../shared/components/line-overlay/fleet-user-line-overlay.component';
import { FleetUserResultMessageComponent } from '../shared/components/result-message/fleet-user-result-message.component';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { FleetUserWizardGuardService } from '../shared/services/fleet-user-wizard-guard.service';
import { FleetUserMobileActionButtonsComponent } from '../shared/components/mobile-action-buttons/fleet-user-mobile-action-buttons.component';
import { FleetUserProductService } from '../../shared/services/product/fleet-user-product.service';

@Component({
  selector: 'tg-fleet-user-line-add-options',
  templateUrl: './fleet-user-line-add-options.component.html',
  standalone: true,
  styleUrls: ['./fleet-user-line-add-options.component.css'],
  imports: [
    SalesNgrxModule,
    FormsModule,
    CommonModule,
    MessagesModule,
    FleetUserAvailableOptionComponent,
    FleetUserStickyActionsComponent,
    FleetUserWarningMessageComponent,
    FleetUserLineItemComponent,
    TranslateModule,
    NgClass,
    FleetUserLineOverlayComponent,
    LoaderModule,
    FleetUserResultMessageComponent,
    LoginModule,
    FleetUserMobileActionButtonsComponent,
  ],
})
export class FleetUserLineAddOptionsComponent extends AbstractBaseComponent {
  @Input() productOverviewUrl: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  product: Product;
  salesOrderResponse;
  category;
  stickyContainer = false;
  selectedLine: Product;
  initialSelectedLines: Product;
  showFilteredLines = false;
  productAvailableOptions: GroupedOptions[] = [];
  initialAvailableOptions: GroupedOptions[] = [];
  toggleContainer = false;
  isShowWarning = false;
  optionProducts = [];
  scopes: string[] = LineAddOptionsConstants.SCOPES;
  messageGroup: string = LineAddOptionsConstants.MESSAGE_GROUP;
  showProduct$ = of(false);
  isFleetUserOrderingEnabled$ = of(false);
  showAvailbaleOptionsContainer = true;
  isSourceOneApp = false;

  constructor(
    private readonly messageService: MessageService,
    private readonly eligibleProductService: EligibleProductsService,
    private readonly fleetUserProductService: FleetUserProductService,
    private readonly productOptionsMapService: ProductOptionsMapService,
    private readonly productDataLayerService: ProductDatalayerService,
    private readonly loaderService: LoaderService,
    private readonly urlService: UrlService,
    private readonly fleetMessageService: FleetUserMessageService,
    private readonly wizardGuardService: FleetUserWizardGuardService
  ) {
    super();
  }

  initAfterLoggedIn(): void {
    this.productDataLayerService.pushPageStepDataToAnalytics(
      LineAddOptionsConstants.STEP_ID_ADD_OPTION_OVERLAY,
      LineChangeTariffPlanConstants.EVENT_ATTRIBUTE_INTENT_CHANGE_TARIFF_PLAN
    );
    this.productDataLayerService.addFlowStartEventToUDL(
      LineAddOptionsConstants.EVENT_NAME_CHANGE_LINE_DETAILS_STARTED,
      this.salesOrderResponse,
      undefined,
      undefined
    );
    const msisdn = this.urlService.getRequestParamValue(ProductOverviewConstants.MSISDN_PARAM, '');
    this.isSourceOneApp =
      ProductOverviewConstants.ONE_APP_SOURCE ===
      this.urlService.getRequestParamValue(ProductOverviewConstants.SOURCE_PARAMETER, '');
    this.showProduct$ = this.wizardGuardService.product$(this.messageGroup, msisdn).pipe(
      tap((product: Product) => {
        if (product) {
          this.product = product;
          this.initialSelectedLines = product;
          this.selectedLine = cloneDeep(this.initialSelectedLines);
          this.getLineOptions();
        }
      }),
      map((product: Product) => !!product)
    );

    this.isFleetUserOrderingEnabled$ = this.wizardGuardService.isFleetUserOrderingEnabled$(this.messageGroup);
    this.messageService.clearMessages(this.messageGroup);
  }
  getLineOptions(): void {
    this.loaderService.start();
    this.eligibleProductService
      .getEligibleProductsByIdentifier(LineAddOptionsConstants.MESSAGE_GROUP, this.getFirstSelectedLineId())
      .pipe(finalize(() => this.loaderService.stop()))
      .subscribe({
        next: (response: EligibleProductInterface[]) => {
          this.productAvailableOptions = this.productOptionsMapService.groupOptionsByCategory(response);
          this.optionProducts = first(response).optionProducts;
          const mutuallyExclusiveSubcategory = this.loadMutuallyExclusiveSubcategory(first(response).optionProducts);
          const options: Option[] = this.selectedLine.options;
          const lineOptions = this.getProductLineOptions();
          lineOptions.forEach((lineOption) => {
            const ownedOption = this.isOptionActive(options, lineOption);
            if (mutuallyExclusiveSubcategory.includes(lineOption.category)) {
              lineOption.isDisabled = true;
            }
            if (ownedOption) {
              lineOption.isSelected = true;
              lineOption.isDisabled = true;
            }
          });
          this.initialAvailableOptions = cloneDeep(this.productAvailableOptions);
        },
        error: (error) => {
          this.fleetMessageService.showError(error, this.messageGroup);
        },
      });
  }

  isOptionActive(options: Option[], lineOption: LineOption): boolean {
    return options.some(
      (option) =>
        option.productId === lineOption.id &&
        (option.status === LineAddOptionsConstants.STATUS_ACTIVE ||
          option.status === LineAddOptionsConstants.ACTIVATION_PASSED_PONR)
    );
  }

  getProductLineOptions() {
    const options = [];
    this.productAvailableOptions.forEach((productLineOption) => {
      productLineOption.lineOptions.forEach((subcategory) => {
        options.push(subcategory);
      });
    });
    return options;
  }
  getFirstSelectedLineId() {
    return !isEmpty(this.selectedLine) ? this.selectedLine.identifier : '';
  }

  toggleAvailableOptions(): void {
    this.showAvailbaleOptionsContainer = !this.showAvailbaleOptionsContainer;
  }

  revertChanges(): void {
    this.selectedLine = cloneDeep(this.initialSelectedLines);
    this.productAvailableOptions = cloneDeep(this.initialAvailableOptions);
  }

  showWarningContent(): void {
    this.isShowWarning = true;
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

  public toggleContainerData(toggleContainer): void {
    this.toggleContainer = toggleContainer;
  }

  public backToProductOverview(): void {
    this.loaderService.start();
    this.urlService.redirectTo(this.productOverviewUrl);
  }

  hasErrorOrSuccessMessage(): boolean {
    return (
      this.messageService.hasErrorMessages(this.messageGroup) ||
      this.messageService.hasMessagesOfType(this.messageGroup, MessageType.SUCCESS)
    );
  }

  closeWarningMessage() {
    this.isShowWarning = false;
  }

  hasNoChanges(): boolean {
    return this.initialSelectedLines.options.length === this.selectedLine.options.length;
  }
  private loadMutuallyExclusiveSubcategory(response) {
    const category = [];
    of(response).pipe(
      map((data) => {
        data
          .filter(function (currentObject) {
            return (
              currentObject.productInfo &&
              currentObject.productInfo.subcategory !== undefined &&
              currentObject.productInfo.subcategory.mutualExclusion === true
            );
          })
          .groupBy(function (currentObject) {
            return currentObject.productInfo.subcategory.localizedName;
          })
          .map(function (value, key) {
            value.map((item) => {
              if (item.type === LineAddOptionsConstants.MANDATORY) {
                category.push(key);
              }
            });
          });
      })
    );
    return uniq(category);
  }
}
