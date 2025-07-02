import { Component, computed, inject, Inject, Input, signal, WritableSignal } from '@angular/core';
import { MessageService, MessagesModule, MessageType } from '@telenet/ng-lib-message';
import { AbstractBaseComponent, AssetService, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import isEmpty from 'lodash-es/isEmpty';
import first from 'lodash-es/first';
import { AsyncPipe, DOCUMENT, NgClass } from '@angular/common';
import { finalize, map, tap } from 'rxjs/operators';
import { EligibleProductInterface } from '../../shared/interfaces/eligible-product.interface';
import { EligibleProductsService } from '../../../shared/common/services/products/eligible-products.service';
import { CoreService } from '../../shared/services/sales/core.service';
import { FleetUserMessageService } from '../../shared/services/message/fleet-user-message.service';
import { LineChangeTariffPlanConstants } from '../shared/constants/line-change-tariff-plan.constants';
import { FleetUserStickyActionsComponent } from '../shared/components/sticky-actions/sticky-actions.component';
import { LineItemsComponent } from './views/line-items/line-items.component';
import { TranslateModule } from '@ngx-translate/core';
import { AvailableOptionsComponent } from './views/available-options/available-options.component';
import { Product } from '../../shared/models/product.model';
import { ProductDatalayerService } from '../../shared/services/datalayer/product-datalayer.service';
import { SalesNgrxModule } from '../shared/store/sales/state/sales/sales-ngrx.module';
import { FleetUserWarningMessageComponent } from '../shared/components/warning-message/fleet-user-warning-message.component';
import { ChangeTariffPlanEventingService } from './services/change-tariff-plan-eventing.service';
import { cloneDeep } from 'lodash-es';
import { ManageModifyProductsInterface } from '../../shared/interfaces/manage-modify-products.interface';
import { TariffPlanOption } from './interfaces/tariff-plan-option.interface';
import { TariffPlanOptionMapper } from './mapper/tariff-plan-option.mapper';
import { FleetUserLineOverlayComponent } from '../shared/components/line-overlay/fleet-user-line-overlay.component';
import { FleetUserResultMessageComponent } from '../shared/components/result-message/fleet-user-result-message.component';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { Observable, of } from 'rxjs';
import { FleetUserWizardGuardService } from '../shared/services/fleet-user-wizard-guard.service';
import { FleetUserAvailableOptionComponent } from '../line-add-options/views/available-option/fleet-user-available-option.component';
import { FleetUserMobileActionButtonsComponent } from '../shared/components/mobile-action-buttons/fleet-user-mobile-action-buttons.component';
import { OrderItem } from '../../shared/models/order-item.model';
import { SalesOrder } from '../../shared/models/sales-order.model';
import { EligibleOfferInterface } from '../../shared/interfaces/eligible-offers.interface';

@Component({
  selector: 'tg-fleet-user-line-change-tariff-plan',
  templateUrl: './fleet-user-line-change-tariff-plan.component.html',
  standalone: true,
  providers: [TariffPlanOptionMapper],
  styleUrls: ['./fleet-user-line-change-tariff-plan.component.css'],
  imports: [
    SalesNgrxModule,
    FleetUserStickyActionsComponent,
    LineItemsComponent,
    TranslateModule,
    AvailableOptionsComponent,
    NgClass,
    MessagesModule,
    FleetUserWarningMessageComponent,
    FleetUserLineOverlayComponent,
    FleetUserResultMessageComponent,
    LoginModule,
    LoaderModule,
    AsyncPipe,
    FleetUserAvailableOptionComponent,
    FleetUserMobileActionButtonsComponent,
  ],
})
export class FleetUserLineChangeTariffPlanComponent extends AbstractBaseComponent {
  @Input() productOverviewUrl: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  affectedLineCount = computed(() => this.disconnectedActiveTariffPlanOptions().length);
  disconnectedActiveTariffPlanOptions: WritableSignal<TariffPlanOption[]> = signal<[]>([]);

  messageGroup = LineChangeTariffPlanConstants.MESSAGE_GROUP;
  initialProduct: Product;
  initialOptions: TariffPlanOption[] = [];
  tariffPlanOptions: TariffPlanOption[] = [];
  salesOrderResponse: SalesOrder;
  lineEligibleProducts: EligibleProductInterface;
  mobilePlans: EligibleOfferInterface[] = [];
  dataPlans: EligibleOfferInterface[] = [];
  isChangesConfirmed = false;
  salesOrderId = '';
  public stickyContainer = false;
  newTariffPlan: EligibleOfferInterface;
  confirmationImage = AssetService.getImagePath('FLEET_LINE_CHANGE_TARIFF_PLAN', 'tariff-confirmation.svg');
  loading = true;
  isCategorySelected = true;
  hasActiveTariff = false;
  scopes = LineChangeTariffPlanConstants.SCOPES;
  msisdn: string;
  product: Product;
  isFleetUserOrderingEnabled$: Observable<boolean> = of(false);
  showProduct$: Observable<boolean> = of(false);
  isSourceOneApp = false;
  showAvailableOptionsContainer = true;
  readonly #eventingService = inject(ChangeTariffPlanEventingService);

  readonly #tariffPlanOptionMapper = inject(TariffPlanOptionMapper);
  readonly #messageService: MessageService = inject(MessageService);
  readonly #urlService: UrlService = inject(UrlService);
  readonly #wizardGuardService: FleetUserWizardGuardService = inject(FleetUserWizardGuardService);

  constructor(
    private readonly eligibleProductService: EligibleProductsService,
    private readonly productDatalayerService: ProductDatalayerService,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly coreService: CoreService,
    private readonly loaderService: LoaderService,
    private readonly fleetMessageService: FleetUserMessageService
  ) {
    super();
  }

  initAfterLoggedIn(): void {
    this.productDatalayerService.pushPageStepDataToAnalytics(
      LineChangeTariffPlanConstants.STEP_ID_CHANGE_TARIFF_PLAN_OVERLAY,
      LineChangeTariffPlanConstants.EVENT_ATTRIBUTE_INTENT_CHANGE_TARIFF_PLAN
    );
    this.productDatalayerService.addFlowStartEventToUDL(
      LineChangeTariffPlanConstants.EVENT_NAME_CHANGE_LINE_DETAILS_STARTED,
      this.salesOrderResponse,
      this.hasActiveTariff,
      false
    );
    this.#messageService.getMessagesByGroupName(this.messageGroup);
    this.#messageService.clearMessages(this.messageGroup);
    const msisdn = this.#urlService.getRequestParamValue(ProductOverviewConstants.MSISDN_PARAM, '');
    this.showProduct$ = this.#wizardGuardService.product$(this.messageGroup, msisdn).pipe(
      tap((product: Product) => {
        if (product) {
          this.product = product;
          this.initialProduct = cloneDeep(product);
          this.tariffPlanOptions = this.#tariffPlanOptionMapper.mapNonDisconnectedTariffPlanOptions(product.options);
          this.initialOptions = cloneDeep(this.tariffPlanOptions);
          this.getLineOptions(product);
        }
      }),
      map((product: Product) => !!product)
    );

    this.isFleetUserOrderingEnabled$ = this.#wizardGuardService.isFleetUserOrderingEnabled$(this.messageGroup);
    this.isSourceOneApp =
      ProductOverviewConstants.ONE_APP_SOURCE ===
      this.#urlService.getRequestParamValue(ProductOverviewConstants.SOURCE_PARAMETER, '');
  }

  hasNoChanges(): boolean {
    return this.affectedLineCount() === 0 && !this.newTariffPlan;
  }
  onSelectTariff(selectedTariffPlan: EligibleOfferInterface) {
    this.loaderService.start();
    this.obs(
      this.coreService
        .modifyProducts(this.messageGroup, this.getPostData(selectedTariffPlan))
        .pipe(finalize(() => this.loaderService.stop()))
    ).subscribe({
      next: (response) => {
        if (response.success) {
          this.salesOrderResponse = response;
          this.salesOrderId = response.id;
          const modifiedTariffPlan = response.lineItems[0].orderItems.find(
            (item) => item && item.status === LineChangeTariffPlanConstants.MODIFY_STATUS
          );
          this.tariffPlanOptions = modifiedTariffPlan
            ? this.#tariffPlanOptionMapper.mapNonDisconnectedTariffPlanOptions(modifiedTariffPlan.orderItems)
            : [];
          const activeTariffPlan = response.lineItems[0].orderItems.find(
            (item) => item && item.status.toUpperCase() === LineChangeTariffPlanConstants.ACTIVE_STATUS
          );
          this.hasActiveTariff = !!activeTariffPlan;
          this.activeTariffPlanOptionsChanged(activeTariffPlan ? activeTariffPlan.orderItems : []);
          this.updateNewTariffPlan(selectedTariffPlan);
          if (window.innerWidth < 750) {
            this.isCategorySelected = false;
          }
        } else {
          this.fleetMessageService.showError(response.error, this.messageGroup);
        }
      },
      error: (error) => {
        this.fleetMessageService.showError(error, this.messageGroup);
      },
    });
  }

  updateNewTariffPlan(selectedTariffPlan: EligibleOfferInterface): void {
    if (selectedTariffPlan.productInfo.productId === this.newTariffPlan?.productInfo.productId) {
      this.newTariffPlan = null;
    } else {
      this.newTariffPlan = selectedTariffPlan;
    }
  }

  toggleStickyContainer(): void {
    this.stickyContainer = !this.stickyContainer;
    this.isChangesConfirmed = this.stickyContainer ? this.isChangesConfirmed : false;
  }

  containsDisconnectedStatus(): boolean {
    return this.affectedLineCount() > 0;
  }

  submitDetails(): void {
    this.affectedLineCount() > 0 ? this.showWarning() : this.submitTariffPlan();
  }

  submitTariffPlanFromWarning() {
    this.toggleWarningMessage();
    this.submitTariffPlan();
  }

  toggleWarningMessage() {
    this.isChangesConfirmed = !this.isChangesConfirmed;
  }

  toggleAvailableOptions(): void {
    this.showAvailableOptionsContainer = !this.showAvailableOptionsContainer;
  }

  submitTariffPlan() {
    const payload = {
      salesOrderId: this.salesOrderId,
      messageGroup: this.messageGroup,
    };
    this.loaderService.start();
    this.obs(this.coreService.submitSalesOrder(payload).pipe(finalize(() => this.loaderService.stop()))).subscribe({
      next: (salesOrder) => {
        if (this.hasActiveTariff || this.affectedLineCount() > 0) {
          this.#eventingService.SCRemovedEvent(salesOrder, this.hasActiveTariff);
        }
        this.#eventingService.selfServiceFlowEndEvent(salesOrder, this.hasActiveTariff);
        this.fleetMessageService.showSuccess(this.messageGroup, LineChangeTariffPlanConstants.SUCCESS_MESSAGE);
      },
      error: (error) => {
        this.fleetMessageService.showError(error, this.messageGroup);
      },
    });
  }

  showWarning(): void {
    this.isChangesConfirmed = true;
    const overlayPage = this.document.getElementById('overlayPage');
    if (overlayPage) {
      overlayPage.scrollTop = 0;
    }
  }

  backToProductOverview(): void {
    this.loaderService.start();
    this.#urlService.redirectTo(this.productOverviewUrl);
  }

  revertChanges() {
    this.product = cloneDeep(this.initialProduct);
    this.tariffPlanOptions = cloneDeep(this.initialOptions);
    this.newTariffPlan = null;
    this.disconnectedActiveTariffPlanOptions.set([]);
  }

  activeTariffPlanOptionsChanged($event: OrderItem[]) {
    this.disconnectedActiveTariffPlanOptions.set(this.#tariffPlanOptionMapper.mapDisconnectedTariffPlanOptions($event));
  }

  hasErrorOrSuccessMessage() {
    return (
      this.#messageService.hasErrorMessages(this.messageGroup) ||
      this.#messageService.hasMessagesOfType(this.messageGroup, MessageType.SUCCESS)
    );
  }

  private getLineOptions(product: Product): void {
    this.loaderService.start();
    this.obs(
      this.eligibleProductService
        .getEligibleProductsByIdentifier(this.messageGroup, product.identifier)
        .pipe(finalize(() => this.loaderService.stop()))
    ).subscribe({
      next: (response: EligibleProductInterface[]) => {
        if (!isEmpty(response)) {
          this.lineEligibleProducts = first(response);
          this.lineEligibleProducts.eligibleOffers.forEach((offer) => {
            if (offer.productInfo.productId === product.productInfo.productId) {
              offer.isSelected = false;
              offer.isPreviouslyAdded = true;
              offer.isDisabled = true;
            }
            this.isDataPlans(offer) ? this.dataPlans.push(offer) : this.mobilePlans.push(offer);
          });
        } else {
          this.backToProductOverview();
        }
        this.loading = false;
      },
      error: (error) => {
        this.fleetMessageService.showError(error, this.messageGroup);
        this.loading = false;
      },
    });
  }

  private getPostData(eligibleOffer: EligibleOfferInterface): ManageModifyProductsInterface[] {
    return [
      {
        productIdentifier: this.product.identifier,
        offers: [
          {
            id: eligibleOffer.productInfo.productId,
            type: 'PRODUCT',
          },
        ],
        locationId: this.product.locationId,
      },
    ];
  }

  private isDataPlans(plan): boolean {
    return (
      plan.productInfo.services?.serviceType === LineChangeTariffPlanConstants.MOBILE_INTERNET &&
      plan.productInfo.services.length === 1
    );
  }
}
