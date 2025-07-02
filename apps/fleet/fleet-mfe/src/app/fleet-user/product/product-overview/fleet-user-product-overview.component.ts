/* eslint-disable sonarjs/cognitive-complexity */
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginDetails, LoginModule, OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { ProductMapper } from './mappers/product.mapper';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { ErrorMessage, MessageService, MessagesModule } from '@telenet/ng-lib-message';
import { LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { ProductOverviewFacade } from './store/product-overview.facade';
import { ProductOverviewConfigState } from './store/product-overview.reducer';
import { FleetUserProductOverviewNgrxModule } from './fleet-user-product-overview-ngrx.module';
import { CustomerAccountService } from '../../shared/services/customer/customer-account.service';
import { Product } from '../../shared/models/product.model';
import { ProductStandaloneComponent } from './product-standalone/product-standalone.component';
import { ProductNotificationsComponent } from './product-notifications/product-notifications.component';

@Component({
  selector: 'tg-fleet-user-product-overview',
  templateUrl: './fleet-user-product-overview.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LoginModule,
    LoaderModule,
    FleetUserProductOverviewNgrxModule,
    MessagesModule,
    ProductStandaloneComponent,
    ProductNotificationsComponent,
  ],
})
export class FleetUserProductOverviewComponent implements OnInit, OnDestroy {
  @Input() manageOptionUrl: string;
  @Input() lineAddOptionsUrl: string;
  @Input() lineRemoveOptionsUrl: string;
  @Input() lineChangeTariffPlanUrl: string;
  @Input() componentInstanceID: string;
  @Input() isAccountSelectorConsumer: boolean;

  @Input() set enableSB20AddOptions(value: string) {
    this.isSplitBill20AddOptionsEnabled = value.toUpperCase() === 'TRUE';
  }

  @Input() set enableSB20RemoveOptions(value: string) {
    this.isSplitBill20RemoveOptionsEnabled = value.toUpperCase() === 'TRUE';
  }
  @Input() set enableSB20ChangeTariffPlan(value: string) {
    this.isSplitBill20ChangeTariffPlanEnabled = value.toUpperCase() === 'TRUE';
  }

  protected readonly JSON = JSON;
  readonly messageGroupName = 'product-overview';
  readonly scopes: string[] = ['productholding'];
  readonly status: string = [
    ProductOverviewConstants.ACTIVE_STATUS,
    ProductOverviewConstants.SUSPENDED_STATUS,
    ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
    ProductOverviewConstants.DISCONNECTION_IN_PROGRESS_STATUS,
    ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS,
    ProductOverviewConstants.DISCONNECTED_STATUS,
  ].join(',');

  selectedAccountProducts: Product[] = [];
  hasSalesScope = false;
  canManageProductHolding = false;
  showSuspendedPlanNotificationMessage = false;
  showMoveNotificationMessage = false;
  isFleetUserOrderingEnabled$: Observable<boolean>;
  isSplitBill20AddOptionsEnabled: boolean;
  isSplitBill20RemoveOptionsEnabled: boolean;
  isSplitBill20ChangeTariffPlanEnabled: boolean;

  private readonly unsubscribe$ = new Subject<void>();
  readonly #loaderService = inject(LoaderService);
  readonly #customerAccountService = inject(CustomerAccountService);

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly urlService: UrlService,
    private readonly productMapper: ProductMapper,
    private readonly messageService: MessageService,
    private readonly phoneNumberTransformService: PhoneNumberTransformService,
    private readonly productOverviewFacade: ProductOverviewFacade
  ) {}

  ngOnInit(): void {
    this.writeConfigToState();
  }

  initAfterLoggedIn(loginDetails: LoginDetails): void {
    this.productOverviewFacade.selectedAccountProducts$.pipe(takeUntil(this.unsubscribe$)).subscribe((products) => {
      this.selectedAccountProducts = products;
    });

    this.productOverviewFacade.scopes$.pipe(takeUntil(this.unsubscribe$)).subscribe((scopes) => {
      this.hasSalesScope = scopes.hasSalesScope;
      this.canManageProductHolding = scopes.canManageProductHolding;
    });
    this.isFleetUserOrderingEnabled$ =
      this.isSplitBill20AddOptionsEnabled ||
      this.isSplitBill20RemoveOptionsEnabled ||
      this.isSplitBill20ChangeTariffPlanEnabled
        ? this.#customerAccountService.isFleetUserOrderingEnabled(this.messageGroupName)
        : of(false);

    this.loadProducts(loginDetails);
  }

  private loadProducts(loginDetails: LoginDetails): void {
    this.#loaderService.start();
    const endPoint = this.getProductEndPoint();
    const config = new OcapiCallConfig(this.messageGroupName, endPoint, this.productMapper);
    const ocapiGet$ = this.ocapiService.doGet(config);

    const products$ = ocapiGet$.pipe(
      map((products) => {
        const loginDetailsScopes = loginDetails.scopes || [];
        const normalizedMsisdn = this.normalizedMsisdn(loginDetails.username);
        const loggedInMainProduct = this.findLoggedInMainProduct(products, normalizedMsisdn);
        const isPrepaidLogin =
          loggedInMainProduct?.productInfo?.hasCategory(ProductOverviewConstants.PREPAID_MOBILE) || false;
        if (isPrepaidLogin && loginDetails.isMember()) {
          this.scopes.push('productholding:p');
        }
        const hasSalesScope = loginDetailsScopes.includes('sales') || isPrepaidLogin;
        const canManageProductHolding = loginDetailsScopes.includes('manageproductholding') || isPrepaidLogin;
        this.productOverviewFacade.setScopes({ isPrepaidLogin, hasSalesScope, canManageProductHolding });
        return products;
      })
    );

    products$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (products) => {
        let selectedAccountProducts: Product[] = products;

        selectedAccountProducts = this.filterDisconnectedStatus(selectedAccountProducts);
        selectedAccountProducts = this.sortProducts(selectedAccountProducts);

        this.setIsProductUnderMove(selectedAccountProducts, products);

        this.renderNoProductErrorMessage(selectedAccountProducts);

        this.showSuspendedPlanNotificationMessage = this.showSuspendedPlan(selectedAccountProducts);
        this.showMoveNotificationMessage = this.showMoveNotification(selectedAccountProducts);

        // Update store
        this.productOverviewFacade.setSelectedAccountProducts(selectedAccountProducts);
        this.#loaderService.stop();
      },
      error: (error) => {
        console.error(error);
        this.messageService.addMessage(
          new ErrorMessage('product-overview', ProductOverviewConstants.GENERIC_ERROR_CODE)
        );
        this.#loaderService.stop();
      },
    });
  }

  private findLoggedInMainProduct(products?: Product[], normalizedMsisdn?: string): Product {
    return products?.find((p) => p.identifier.replace(/\s/g, '') === normalizedMsisdn?.replace(/\s/g, ''));
  }

  private sortProducts(products: Product[]): Product[] {
    return products.sort((a, b) => {
      return (a.productInfo.weight || 0) - (b.productInfo.weight || 0);
    });
  }

  private filterDisconnectedStatus(products: Product[]): Product[] {
    return products.filter(
      (product) =>
        ![
          ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS,
          ProductOverviewConstants.DISCONNECTED_STATUS,
        ].includes(product.status)
    );
  }

  private showSuspendedPlan(products: Product[]): boolean {
    return products.some((product) => product.isProductSuspended());
  }

  private showMoveNotification(products: Product[]): boolean {
    return products.some((product) => product.isUnderMove);
  }

  private setIsProductUnderMove(selectedAccountProducts: Product[], products: Product[]): void {
    selectedAccountProducts.forEach((selectedProduct) => {
      let identifier = selectedProduct.identifier;
      if (selectedProduct.parentIdentifier) {
        identifier = selectedProduct.parentIdentifier;
      }
      products.forEach((product) => {
        if (
          identifier === product.identifier &&
          selectedProduct.addressId !== product.addressId &&
          (selectedProduct.status === ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS ||
            selectedProduct.status === ProductOverviewConstants.DISCONNECTION_IN_PROGRESS_STATUS)
        ) {
          selectedProduct.isUnderMove = true;
        }
      });
    });
  }

  private getProductEndPoint(): string {
    return this.getServiceURI(
      ProductOverviewConstants.PRODUCT_SERVICE_PREFIX,
      ProductOverviewConstants.API_VERSION_V1,
      ProductOverviewConstants.CONTEXT_PRODUCT,
      ProductOverviewConstants.EMPTY,
      ProductOverviewConstants.EMPTY,
      `?status=${this.status}`
    );
  }

  private getServiceURI(
    base: string,
    version: string,
    context: string,
    suffix: string,
    endpoint: string,
    queryParams?: string
  ): string {
    const uri = base.concat(version).concat(context).concat(suffix).concat(endpoint);
    return queryParams ? uri.concat(queryParams) : uri;
  }

  private normalizedMsisdn(msisdn: string): string {
    return this.phoneNumberTransformService.transform(msisdn);
  }

  private renderNoProductErrorMessage(products: Product[]): void {
    if (products.length === 0) {
      this.messageService.addMessage(
        new ErrorMessage('product-overview-with-comp', 'product-overview.error.no-products')
      );
    }
  }

  private writeConfigToState(): void {
    const config: ProductOverviewConfigState = {
      manageOptionUrl: this.manageOptionUrl,
      componentInstanceID: this.componentInstanceID,
      isAccountSelectorConsumer: this.isAccountSelectorConsumer,
    };
    this.productOverviewFacade.setConfig(config);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openAddOptionsOverlayForProduct(product: Product) {
    this.redirectToUrlForMsisdn(this.lineAddOptionsUrl, product.identifier);
  }

  openRemoveOptionsOverlayForProduct(product: Product) {
    this.redirectToUrlForMsisdn(this.lineRemoveOptionsUrl, product.identifier);
  }

  openChangeTariffPlanForProduct(product: Product) {
    this.redirectToUrlForMsisdn(this.lineChangeTariffPlanUrl, product.identifier);
  }

  private redirectToUrlForMsisdn(url: string, msisdn: string) {
    const params = new Map<string, string>();
    params.set(ProductOverviewConstants.MSISDN_PARAM, this.phoneNumberTransformService.autoFormatPhoneNumber(msisdn));
    const urlWithParams = this.urlService.buildUrlWithParams(url, params);
    this.#loaderService.start();
    this.urlService.redirectTo(urlWithParams);
  }
}
