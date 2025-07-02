/* eslint-disable sonarjs/cognitive-complexity */
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginDetails, LoginModule, LoginService, OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Option, Product } from './models/product.model';
import { ProductOverviewConstants } from './constants/product-overview.constant';
import { ProductMapper } from './mappers/product.mapper';
import { BehaviorSubject, Observable, Subject, combineLatest, forkJoin, fromEvent, of } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { LoaderModule, PathCategorisationService } from '@telenet/ng-lib-page';
import { TIPContractInterface } from './interfaces/tip-contract.interface';
import { PromotionService } from './services/promotion.service';
import { PhoneToGo } from './interfaces/phone-to-go.interface';
import { PhoneToGoMapper } from './mappers/phone-to-go.mapper';
import { ProductOverviewFacade } from './store/product-overview.facade';
import { ProductOverviewConfigState } from './store/product-overview.reducer';
import { ProfileDetailsByIdentityIDMapper } from './mappers/profile-details-by-identity-id.mapper';
import { ProductOverviewMonthlyPlanComponent } from './product-overview-monthly-plan/product-overview-monthly-plan.component';
import { ProductTipContractsComponent } from './product-tip-contracts/product-tip-contracts.component';
import { ProductModemBannerComponent } from './product-modem-banner/product-modem-banner.component';
import { ProductFreePhoneBusinessComponent } from './product-freephone-business/product-freephone-business.component';
import { ProductC5BundleComponent } from './product-c5-bundle/product-c5-bundle.component';
import { ProductBundleComponent } from './product-bundle/product-bundle.component';
import { ProductNotificationsComponent } from './product-notifications/product-notifications.component';
import { ProductStandaloneComponent } from './product-standalone/product-standalone.component';
import { ProductOverviewNgRxModule } from './product-overview-ngrx.module';

export interface MarketingPages {
  dtv: string;
  fixed: string;
  internet: string;
  mobile: string;
}

@Component({
  selector: 'tg-product-overview',
  templateUrl: './product-overview.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LoginModule,
    LoaderModule,
    ProductOverviewNgRxModule,
    ProductOverviewMonthlyPlanComponent,
    ProductTipContractsComponent,
    ProductModemBannerComponent,
    ProductFreePhoneBusinessComponent,
    ProductC5BundleComponent,
    ProductBundleComponent,
    ProductNotificationsComponent,
    ProductStandaloneComponent,
  ],
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
  @Input() changeTariffPlanUrl: string;
  @Input() manageOptionUrl: string;
  @Input() componentInstanceID: string;
  @Input() addSubscriptionUrl: string;
  @Input() discoverSmartPhoneUrl: string;
  @Input() freePhoneBusinessUrl: string;
  @Input() isAccountSelectorConsumer: boolean;
  @Input() planUpgradeUrl: string;
  @Input() changeDataPlanUrl: string;
  @Input() managePhone2GoUrl: string;
  @Input() intentRequired: boolean;
  @Input() dtvMarketingUrl: string;
  @Input() fixedLineMarketingUrl: string;
  @Input() internetMarketingUrl: string;
  @Input() mobileMarketingUrl: string;
  @Input() changeMobileTariffUrl: string;
  @Input() changeDTVTariffUrl: string;
  @Input() changeInternetTariffUrl: string;

  readonly messageGroupName = 'product-overview';
  readonly scopes = ['productholding'];
  readonly status = [
    ProductOverviewConstants.ACTIVE_STATUS,
    ProductOverviewConstants.SUSPENDED_STATUS,
    ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
    ProductOverviewConstants.DISCONNECTION_IN_PROGRESS_STATUS,
    ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS,
    ProductOverviewConstants.DISCONNECTED_STATUS,
  ].join(',');

  selectedAccountProducts: Product[] = [];
  fpbProducts: Product[] = [];
  hasSalesScope = false;
  canManageProductHolding = false;
  streamingOptions: Option[] = [];
  tipContracts: TIPContractInterface[];
  showYUPNotificationMessage = false;
  showSuspendedPlanNotificationMessage = false;
  showMoveNotificationMessage = false;
  showModemUpgradeBanner = false;
  phoneToGoNumbers: PhoneToGo[] = [];
  marketingPagesObject: MarketingPages;

  private readonly unsubscribe$ = new Subject();

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly productMapper: ProductMapper,
    private readonly phoneToGoMapper: PhoneToGoMapper,
    private readonly loginService: LoginService,
    private readonly messageService: MessageService,
    private readonly promotionService: PromotionService,
    private readonly phoneNumberTransformService: PhoneNumberTransformService,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly productOverviewFacade: ProductOverviewFacade,
    private readonly profileDetailsByIdentityIDMapper: ProfileDetailsByIdentityIDMapper
  ) {}

  ngOnInit(): void {
    this.writeConfigToState();
  }

  initAfterLoggedIn(): void {
    this.productOverviewFacade.selectedAccountProducts$.pipe(takeUntil(this.unsubscribe$)).subscribe((products) => {
      this.selectedAccountProducts = products;
    });

    this.productOverviewFacade.freePhoneBusinessProducts$.pipe(takeUntil(this.unsubscribe$)).subscribe((products) => {
      this.fpbProducts = products;
    });

    this.productOverviewFacade.scopes$.pipe(takeUntil(this.unsubscribe$)).subscribe((scopes) => {
      this.hasSalesScope = scopes.hasSalesScope;
      this.canManageProductHolding = scopes.canManageProductHolding;
    });

    this.marketingPagesObject = {
      dtv: this.dtvMarketingUrl,
      fixed: this.fixedLineMarketingUrl,
      internet: this.internetMarketingUrl,
      mobile: this.mobileMarketingUrl,
    };
    this.productOverviewFacade.setMarketingPages(this.marketingPagesObject);

    this.loadProducts();
  }

  private loadProducts(): void {
    const endPoint = this.getServiceURI(
      ProductOverviewConstants.PRODUCT_SERVICE_PREFIX,
      ProductOverviewConstants.API_VERSION_V1,
      ProductOverviewConstants.CONTEXT_PRODUCT,
      ProductOverviewConstants.EMPTY,
      ProductOverviewConstants.EMPTY,
      `?status=${this.status}`
    );

    const config = new OcapiCallConfig(this.messageGroupName, endPoint, this.productMapper, null);

    const ocapiGet$ = this.ocapiService.doGet(config);

    const tipContracts = (details: LoginDetails) =>
      this.checkShowTipContracts(details) ? this.initTIPContracts().pipe(catchError(() => of([]))) : of([]);
    const profileDetails = (details: LoginDetails) =>
      details.isPid ? this.getProfileDetailsByIdentityId(details.identityId) : of(details.username);

    const loginDetails$ = this.loginService.getLoginDetails().pipe(
      switchMap((details: LoginDetails) => {
        // we want to pass the result of the loginDetails also to the subscribe. If there is no TIPContracts call, then we return empty array.
        return forkJoin([of(details), tipContracts(details), profileDetails(details)]);
      })
    );

    // we need a behaviourSubject for BASE. Otherwise, the combineLatest will not trigger.
    const accountSelected$: BehaviorSubject<CustomEvent> = new BehaviorSubject<CustomEvent>(new CustomEvent(''));
    if (this.isAccountSelectorConsumer) {
      (fromEvent(document, 'selectedAccountModified') as Observable<CustomEvent>)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(accountSelected$);
    }

    const products$ = forkJoin([ocapiGet$, loginDetails$]).pipe(
      map(([ocapiResponse, [loginDetailsResponse, tipContractsResponse, profileDetailsByIdResponse]]) => {
        const products = ocapiResponse;
        this.tipContracts = tipContractsResponse.filter(
          (tc) => tc.status?.toUpperCase() === ProductOverviewConstants.ACTIVE_STATUS
        );

        /*
           STILLTOCHECK
           - filter product options
           - update rates
           - something with handsets?
           - phone numbers to go
           - how to get error messages when calls fail
          */

        const loginDetailsScopes = loginDetailsResponse.scopes || [];
        let normalizedMsisdn = '';
        if (typeof profileDetailsByIdResponse === 'string') {
          normalizedMsisdn = this.normalizedMsisdn(profileDetailsByIdResponse);
        }
        const loggedInMainProduct = products.find(
          (p) => p.identifier.replace(/\s/g, '') === normalizedMsisdn?.replace(/\s/g, '')
        );
        const isPrepaidLogin =
          loggedInMainProduct?.productInfo?.hasCategory(ProductOverviewConstants.PREPAID_MOBILE) || false;
        if (isPrepaidLogin && loginDetailsResponse.isMember()) {
          this.scopes.push('productholding:p');
        }
        const hasSalesScope = loginDetailsScopes.includes('sales') || isPrepaidLogin;
        const canManageProductHolding = loginDetailsScopes.includes('manageproductholding') || isPrepaidLogin;
        this.productOverviewFacade.setScopes({
          isPrepaidLogin,
          hasSalesScope,
          canManageProductHolding,
        });

        return products;
      }),
      tap((products) => {
        this.handlePhoneToGoProduct(products);
        return products;
      })
    );
    combineLatest([products$, accountSelected$])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: ([products, selectedAccountEvent]) => {
          const locationId = selectedAccountEvent.detail?.selectedAccount?.locationId;
          const selectedAccountProducts = this.filterAndSortSelectedAccountProducts(products, locationId);

          this.setIsProductUnderMove(selectedAccountProducts, products);
          this.streamingOptions = this.checkAndUpdateStreamingOptions(selectedAccountProducts);

          // Extract FreePhone Business products
          const fpbProducts = selectedAccountProducts.filter((product) => product.productInfo.isFPBProduct);

          this.renderNoProductErrorMessage(this.tipContracts, selectedAccountProducts);

          this.showYUPNotificationMessage = this.showYUPNotification(selectedAccountProducts);
          this.showSuspendedPlanNotificationMessage = this.showSuspendedPlan(selectedAccountProducts);
          this.showMoveNotificationMessage = this.showMoveNotification(selectedAccountProducts);
          this.showModemUpgradeBanner = this.showModeBanner(selectedAccountProducts);

          // Update store
          this.productOverviewFacade.setSelectedAccountProducts(selectedAccountProducts);
          this.productOverviewFacade.setFreePhoneBusinessProducts(fpbProducts);
        },
        error: () => {
          /// STILLTOCHECK
          this.messageService.addMessage(
            new ErrorMessage('product-overview', ProductOverviewConstants.GENERIC_ERROR_CODE)
          );
        },
      });
  }

  private handlePhoneToGoProduct(products: Product[]) {
    const phoneToGoProduct = products.some((product) => {
      return product.children.some((child) => {
        return child.productType === 'phone2go';
      });
    });

    if (phoneToGoProduct) {
      const endPointPhoneToGo = this.getServiceURI(
        ProductOverviewConstants.RESOURCE_SERVICE_PREFIX,
        ProductOverviewConstants.API_VERSION_V1,
        ProductOverviewConstants.CONTEXT_PHONE_TO_GO,
        ProductOverviewConstants.EMPTY,
        ProductOverviewConstants.EMPTY,
        ProductOverviewConstants.EMPTY
      );
      const phoneToGoConfig = new OcapiCallConfig(this.messageGroupName, endPointPhoneToGo, this.phoneToGoMapper, null);
      this.ocapiService
        .doGet(phoneToGoConfig)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (phoneToGoResponse: PhoneToGo[]) => {
            this.phoneToGoNumbers = phoneToGoResponse;
          },
          error: (error) => {
            // STILLTOCHECK
            console.log(error);
          },
        });
    }
  }

  private filterAndSortSelectedAccountProducts(products: Product[], locationId: string | undefined): Product[] {
    let selectedAccountProducts: Product[] = [];

    if (locationId) {
      selectedAccountProducts = products.filter((pr) => pr.locationId === locationId);
    } else {
      selectedAccountProducts = products;
    }

    // We filter out the DISCONNECTED_STATUS and DISCONNECTION_PASSED_PONR_STATUS, we do need this in the products array because of the isUnderMove stuff
    selectedAccountProducts = selectedAccountProducts.filter(
      (product) =>
        ![
          ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS,
          ProductOverviewConstants.DISCONNECTED_STATUS,
        ].includes(product.status)
    );

    selectedAccountProducts.sort((a, b) => {
      return (a.productInfo.weight || 0) - (b.productInfo.weight || 0);
    });

    return selectedAccountProducts;
  }

  private showYUPNotification(products: Product[]): boolean {
    return products.some((product) => product.productInfo.isYupProduct);
  }

  private showSuspendedPlan(products: Product[]): boolean {
    return products.some((product) => product.isProductSuspended());
  }

  private showMoveNotification(products: Product[]): boolean {
    return products.some((product) => product.isUnderMove);
  }

  private showModeBanner(products: Product[]): boolean {
    return products.some((product) => product.showModemUpgradeBanner);
  }

  private setIsProductUnderMove(selectedAccountProducts: Product[], products: Product[]) {
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

  // This is to check if the person can have discounts.
  private checkShowTipContracts(loginDetailsResponse: LoginDetails): boolean {
    if (this.pathCategorisationService.getCustomerBrand() === ProductOverviewConstants.BRAND_TELENET) {
      return !(
        loginDetailsResponse.isFleetManager() ||
        loginDetailsResponse.isFleetUser() ||
        loginDetailsResponse.isMember()
      );
    }

    return false;
  }

  private initTIPContracts(): Observable<TIPContractInterface[]> {
    return this.promotionService
      .getTIPContracts(ProductOverviewConstants.MESSAGE_GROUP)
      .pipe(takeUntil(this.unsubscribe$));
  }

  private checkAndUpdateStreamingOptions(products: Product[]) {
    let streamingOptions: Option[] = [];

    products.forEach((product) => {
      product.options?.forEach((option) => {
        if (
          ProductOverviewConstants.STREAMING_SERVICE_CATEGORY_RULES.some((sscr) => {
            return option.productInfo.categories?.includes(sscr);
          })
        ) {
          streamingOptions.push(option);
        }
      });
    });

    streamingOptions = streamingOptions.sort((a, b) => {
      return (a.productInfo.weight || 0) - (b.productInfo.weight || 0);
    });

    return streamingOptions;
  }

  private getServiceURI(
    base: string,
    version: string,
    context: string,
    suffix: string,
    endpoint: string,
    queryParams?: string
  ) {
    const uri = base.concat(version).concat(context).concat(suffix).concat(endpoint);
    return queryParams ? uri.concat(queryParams) : uri;
  }

  private normalizedMsisdn(msisdn: string): string {
    return this.phoneNumberTransformService.transform(msisdn);
  }

  private renderNoProductErrorMessage(tipContracts: TIPContractInterface[], products: Product[]) {
    if (tipContracts.length === 0 && products.length === 0) {
      this.messageService.addMessage(
        new ErrorMessage('product-overview-with-comp', 'product-overview.error.no-products')
      );
    }
  }

  private writeConfigToState() {
    const config: ProductOverviewConfigState = {
      changeTariffPlanUrl: this.changeTariffPlanUrl,
      manageOptionUrl: this.manageOptionUrl,
      componentInstanceID: this.componentInstanceID,
      addSubscriptionUrl: this.addSubscriptionUrl,
      discoverSmartPhoneUrl: this.discoverSmartPhoneUrl,
      freePhoneBusinessUrl: this.freePhoneBusinessUrl,
      isAccountSelectorConsumer: this.isAccountSelectorConsumer,
      planUpgradeUrl: this.planUpgradeUrl,
      intentRequired: this.intentRequired,
    };
    this.productOverviewFacade.setConfig(config);
  }

  private getProfileDetailsByIdentityId(identityId: string): Observable<string> {
    const suffix = '/' + identityId;
    const endPoint = this.getServiceURI(
      ProductOverviewConstants.CUSTOMER_SERVICE_PREFIX,
      ProductOverviewConstants.API_VERSION_V1,
      ProductOverviewConstants.ENDPOINT_IDENTITY,
      suffix,
      ProductOverviewConstants.EMPTY
    );
    const ocapiConfig = new OcapiCallConfig(
      ProductOverviewConstants.MESSAGE_GROUP_CUSTOMER,
      endPoint,
      this.profileDetailsByIdentityIDMapper
    );

    return this.ocapiService.doGet(ocapiConfig);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
