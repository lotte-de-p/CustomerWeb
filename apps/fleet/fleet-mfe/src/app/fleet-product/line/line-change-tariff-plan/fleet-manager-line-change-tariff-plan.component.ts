import { Component, computed, inject, Inject, Input, Signal } from '@angular/core';
import { MessageService, MessagesModule, MessageType } from '@telenet/ng-lib-message';
import { AbstractBaseComponent, AssetService, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import isEmpty from 'lodash-es/isEmpty';
import first from 'lodash-es/first';
import { AsyncPipe, DOCUMENT, NgClass } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { EligibleProductInterface } from '../shared/interfaces/eligible-product.interface';
import { EligibleProductsService } from '../../../shared/common/services/products/eligible-products.service';
import { FleetMessageService } from '../shared/services/message/fleet-message.service';
import { LineItemsComponent } from './views/line-items/line-items.component';
import { TranslateModule } from '@ngx-translate/core';
import { AvailableOptionsComponent } from './views/available-options/available-options.component';
import { ProductDatalayerService } from '../shared/services/datalayer/product-datalayer.service';
import { SalesNgrxModule } from '../shared/store/sales/state/sales/sales-ngrx.module';
import { ChangeTariffPlanEventingService } from './services/change-tariff-plan-eventing.service';
import { EligibleOfferInterface } from '../shared/interfaces/eligible-offer.interface';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { Observable } from 'rxjs';
import { FleetManagerLineOverlayComponent } from '../line-overlay/fleet-manager-line-overlay.component';
import { CustomerProductHolding } from '../shared/models/customer-product-holding.model';
import { LineChangeTariffPlanConstants } from './constants/line-change-tariff-plan.constants';
import { ProductsService } from '../shared/services/product/products.service';
import { FleetManagerWarningMessageComponent } from '../shared/components/warning-message/warning-message.component';
import { FleetManagerStickyActionsComponent } from '../shared/components/sticky-actions/sticky-actions.component';
import { FleetManagerResultMessageComponent } from '../shared/components/result-message/fleet-manager-result-message.component';
import { ChangeTariffPlanService } from './services/change-tariff-plan.service';

@Component({
  selector: 'tg-fleet-manager-line-change-tariff-plan',
  templateUrl: './fleet-manager-line-change-tariff-plan.component.html',
  standalone: true,
  imports: [
    SalesNgrxModule,
    LineItemsComponent,
    TranslateModule,
    AvailableOptionsComponent,
    NgClass,
    MessagesModule,
    FleetManagerStickyActionsComponent,
    FleetManagerWarningMessageComponent,
    FleetManagerLineOverlayComponent,
    LoginModule,
    LoaderModule,
    AsyncPipe,
    FleetManagerResultMessageComponent,
  ],
})
export class FleetManagerLineChangeTariffPlanComponent extends AbstractBaseComponent {
  @Input() redirectUrl: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  messageGroup = LineChangeTariffPlanConstants.MESSAGE_GROUP;
  isChangesConfirmed = false;
  public stickyContainer = false;
  confirmationImage = AssetService.getImagePath('FLEET_LINE_CHANGE_TARIFF_PLAN', 'tariff-confirmation.svg');
  loading = true;
  isCategorySelected = true;
  scopes = LineChangeTariffPlanConstants.SCOPES;

  readonly #eventingService = inject(ChangeTariffPlanEventingService);
  readonly #messageService: MessageService = inject(MessageService);
  readonly #urlService: UrlService = inject(UrlService);
  readonly #changeTariffPlanService: ChangeTariffPlanService = inject(ChangeTariffPlanService);
  readonly #eligibleProductService: EligibleProductsService = inject(EligibleProductsService);
  readonly #productDatalayerService: ProductDatalayerService = inject(ProductDatalayerService);
  readonly #loaderService: LoaderService = inject(LoaderService);
  readonly #fleetMessageService: FleetMessageService = inject(FleetMessageService);
  readonly #productsService: ProductsService = inject(ProductsService);

  product = this.#changeTariffPlanService.product;
  newTariffPlan = this.#changeTariffPlanService.newTariffPlan;
  tariffPlanOptions = this.#changeTariffPlanService.tariffPlanOptions;
  mobilePlans: Signal<EligibleOfferInterface[]> = this.#changeTariffPlanService.mobilePlans;
  dataPlans: Signal<EligibleOfferInterface[]> = this.#changeTariffPlanService.dataPlans;
  disconnectedActiveTariffPlanOptions = this.#changeTariffPlanService.disconnectedActiveTariffPlanOptions;
  affectedLineCount = computed(() => this.#changeTariffPlanService.disconnectedActiveTariffPlanOptions().length);
  hasActiveTariff = this.#changeTariffPlanService.hasActiveTariff;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly productsService: ProductsService
  ) {
    super();
  }

  initAfterLoggedIn(): void {
    this.#productDatalayerService.pushPageStepDataToAnalytics(
      LineChangeTariffPlanConstants.STEP_ID_CHANGE_TARIFF_PLAN_OVERLAY,
      LineChangeTariffPlanConstants.EVENT_ATTRIBUTE_INTENT_CHANGE_TARIFF_PLAN
    );
    this.#productDatalayerService.addFlowStartEventToUDL(
      LineChangeTariffPlanConstants.EVENT_NAME_CHANGE_LINE_DETAILS_STARTED,
      null,
      this.hasActiveTariff(),
      false
    );
    this.#messageService.getMessagesByGroupName(this.messageGroup);
    this.#messageService.clearMessages(this.messageGroup);
    const msisdn = this.#urlService.getRequestParamValue(ProductOverviewConstants.MSISDN_PARAM, '');
    this.getProducts(msisdn).subscribe((product: CustomerProductHolding) => {
      if (product) {
        this.#changeTariffPlanService.initializeData(product);
        this.getLineOptions(product);
      }
    });
  }

  getProducts(msisdn: string): Observable<CustomerProductHolding> {
    this.#loaderService.start();
    return this.obs(
      this.#productsService
        .getProductByIdentifier(ProductOverviewConstants.MESSAGE_GROUP, msisdn)
        .pipe(finalize(() => this.#loaderService.stop()))
    );
  }

  private getLineOptions(product: CustomerProductHolding): void {
    this.#loaderService.start();
    this.obs(
      this.#eligibleProductService
        .getEligibleProductsByIdentifier(this.messageGroup, product.identifier)
        .pipe(finalize(() => this.#loaderService.stop()))
    ).subscribe({
      next: (response: EligibleProductInterface[]) => {
        if (!isEmpty(response)) {
          this.#changeTariffPlanService.setLineOptionsData(first(response));
        } else {
          this.redirect();
        }
        this.loading = false;
      },
      error: (error) => {
        this.#fleetMessageService.showError(error, this.messageGroup);
        this.loading = false;
      },
    });
  }

  public onSelectTariff(selectedTariffPlan: EligibleOfferInterface) {
    this.#loaderService.start();
    this.obs(this.#changeTariffPlanService.modifyProduct(selectedTariffPlan))
      .pipe(finalize(() => this.#loaderService.stop()))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.#changeTariffPlanService.updateSalesOrderId(response.id);
            this.#changeTariffPlanService.updateTariffPlanOptionData(response);
            this.#changeTariffPlanService.updateNewTariffPlan(selectedTariffPlan);
            if (window.innerWidth < 750) {
              this.isCategorySelected = false;
            }
          } else {
            this.#fleetMessageService.showError(response.error, this.messageGroup);
          }
        },
        error: (error) => {
          this.#fleetMessageService.showError(error, this.messageGroup);
        },
      });
  }

  public toggleStickyContainer(): void {
    this.stickyContainer = !this.stickyContainer;
    this.isChangesConfirmed = this.stickyContainer ? this.isChangesConfirmed : false;
  }

  public containsDisconnectedStatus(): boolean {
    return this.affectedLineCount() > 0;
  }

  public submitDetails(): void {
    this.affectedLineCount() > 0 ? this.showWarning() : this.submitTariffPlan();
  }

  public submitTariffPlanFromWarning() {
    this.toggleWarningMessage();
    this.submitTariffPlan();
  }

  public toggleWarningMessage() {
    this.isChangesConfirmed = !this.isChangesConfirmed;
  }

  public submitTariffPlan() {
    this.#loaderService.start();
    this.obs(
      this.#changeTariffPlanService.submitSalesOrder().pipe(finalize(() => this.#loaderService.stop()))
    ).subscribe({
      next: (salesOrder) => {
        if (this.hasActiveTariff() || this.affectedLineCount() > 0) {
          this.#eventingService.SCRemovedEvent(salesOrder, this.hasActiveTariff());
        }
        this.#eventingService.selfServiceFlowEndEvent(salesOrder, this.hasActiveTariff());
        this.#fleetMessageService.showSuccess(this.messageGroup, LineChangeTariffPlanConstants.SUCCESS_MESSAGE);
      },
      error: (error) => {
        this.#fleetMessageService.showError(error, this.messageGroup);
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

  public redirect(): void {
    this.#loaderService.start();
    this.#urlService.redirectTo(this.redirectUrl);
  }

  revertChanges() {
    this.#changeTariffPlanService.revertChanges();
  }

  hasErrorOrSuccessMessage() {
    return (
      this.#messageService.hasErrorMessages(this.messageGroup) ||
      this.#messageService.hasMessagesOfType(this.messageGroup, MessageType.SUCCESS)
    );
  }
}
