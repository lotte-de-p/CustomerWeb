import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AbstractBaseComponent, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { MessageService, MessagesModule } from '@telenet/ng-lib-message';
import { DomService } from '@telenet/ng-lib-shared';
import { LineActionsConstants } from '../shared/constants/line-actions.constant';
import { ProductSelectedLineService } from '../shared/services/product/product-selected-line-service';
import { LineProductDetailsHelper } from './helpers/line-product-details-helper';
import { LineProductDetailsConstants } from './constants/line-product-details.constants';
import { FleetManagerLineAddOptionsComponent } from '../line-add-options/fleet-manager-line-add-options.component';
import { FleetManagerLineOverlayComponent } from '../line-overlay/fleet-manager-line-overlay.component';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { CustomerProductHolding } from '../shared/models/customer-product-holding.model';
import { Option } from '../shared/models/option.model';
import { ProductsService } from '../shared/services/product/products.service';

@Component({
  selector: 'tg-fleet-manager-line-product-details',
  standalone: true,
  imports: [
    FleetManagerLineAddOptionsComponent,
    FleetManagerLineOverlayComponent,
    MessagesModule,
    LoaderModule,
    TranslateModule,
    TgFormsModule,
  ],
  templateUrl: './fleet-manager-line-product-details.component.html',
})
export class FleetManagerLineProductDetailsComponent extends AbstractBaseComponent implements OnInit {
  @Input() tariffPlanUrl: string;
  @Input() addOptionUrl: string;
  @Input() removeOptionUrl: string;
  @Input() createTicketUrl: string;
  @Input() splitBillProfileUrl: string;
  @Input() pageType: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  messageGroupName = LineProductDetailsConstants.MESSAGE_GROUP;
  scopes = LineProductDetailsConstants.SCOPES;
  msisdn: string;
  accountNumber: string;
  tariffPlan: string;
  options: string;
  splitBillProfileName: string;
  splitBillProfileDescription: string;
  showDialog = false;
  currentAction = null;
  lineOverviewActions = LineActionsConstants;

  constructor(
    private readonly loaderService: LoaderService,
    private readonly productService: ProductsService,
    private readonly urlService: UrlService,
    private readonly productSelectedLineService: ProductSelectedLineService,
    private readonly messageService: MessageService,
    private readonly domService: DomService
  ) {
    super();
  }

  ngOnInit(): void {
    this.closeOverlay();
    document.addEventListener('overlay:close', () => {
      this.closeOverlay();
    });
    this.msisdn = this.urlService.getRequestParamValue(LineProductDetailsConstants.MSISDN, '');
    this.messageService.getMessagesByGroupName(this.messageGroupName);
    this.populateProductDetails();

    this.createTicketUrl = this.setRedirectUrl(this.createTicketUrl);
    this.splitBillProfileUrl = this.setRedirectUrl(this.splitBillProfileUrl);
  }

  hasTariffPlanUrl(): boolean {
    return LineProductDetailsHelper.checkIfValidUri(this.tariffPlanUrl);
  }

  hasRemoveOptionUrl(): boolean {
    return LineProductDetailsHelper.checkIfValidUri(this.removeOptionUrl);
  }

  hasCreateTicketUrl(): boolean {
    return LineProductDetailsHelper.checkIfValidUri(this.createTicketUrl);
  }

  hasSplitBillProfileUrl(): boolean {
    return LineProductDetailsHelper.checkIfValidUri(this.splitBillProfileUrl);
  }

  hasAddOptionUrl(): boolean {
    return LineProductDetailsHelper.checkIfValidUri(this.addOptionUrl);
  }

  closeOverlay() {
    this.showDialog = false;
  }

  emitAction(action: string) {
    if (action === LineActionsConstants.LINE_ADD_OPTIONS) {
      this.redirectToUrlForMsisdn(this.addOptionUrl, [this.msisdn]);
    } else if (action === LineActionsConstants.LINE_REMOVE_OPTIONS) {
      this.redirectToUrlForMsisdn(this.removeOptionUrl, [this.msisdn]);
    } else if (action === LineActionsConstants.LINE_CHANGE_TARIFF_PLAN) {
      this.redirectToUrlForMsisdn(this.tariffPlanUrl, [this.msisdn]);
    } else {
      this.closeOverlay();
    }
    this.currentAction = action;
    this.domService.scrollToTop();
  }

  private populateProductDetails(): void {
    this.loaderService.start();
    this.obs(
      this.productService
        .getProductByIdentifier(this.messageGroupName, this.msisdn)
        .pipe(finalize(() => this.loaderService.stop()))
    ).subscribe((customerProductHolding: CustomerProductHolding) => {
      if (customerProductHolding) {
        this.setProductDetails(customerProductHolding);
      }
    });
  }

  private redirectToUrlForMsisdn(url: string, msisdns: string[]) {
    const params = new Map<string, string>();
    params.set('msisdn', `${msisdns.join(',')}`);
    const urlWithParams = this.urlService.buildUrlWithParams(url, params);
    this.urlService.redirectTo(urlWithParams);
  }

  private setProductDetails(customerProductHolding: CustomerProductHolding): void {
    this.accountNumber = customerProductHolding.accountNumber;
    this.productSelectedLineService.setSelectedLines([customerProductHolding]);
    this.options = this.getOptionNames(customerProductHolding.options);
    this.tariffPlan = this.getProductPlanName(customerProductHolding);
    this.splitBillProfileName = customerProductHolding.splitBillProfile
      ? customerProductHolding.splitBillProfile.name
      : undefined;
    this.splitBillProfileDescription = customerProductHolding.splitBillProfile
      ? customerProductHolding.splitBillProfile.description
      : undefined;
  }

  private getOptionNames(options: Option[]): string {
    return options.map((option: Option) => option.productInfo.name).join(', ');
  }

  private getProductPlanName(customerProductHolding: CustomerProductHolding): string {
    return customerProductHolding.productInfo && customerProductHolding.productInfo.name;
  }

  private setRedirectUrl(url: string): string {
    if (!!url && url.indexOf(LineProductDetailsConstants.MSISDN_DYNAMIC_KEY_INPUT) !== -1) {
      return url.replace(LineProductDetailsConstants.MSISDN_DYNAMIC_KEY_INPUT, this.msisdn);
    }
    return url;
  }
}
