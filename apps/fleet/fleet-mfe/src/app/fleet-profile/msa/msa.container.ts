import { Component, Input, OnInit } from '@angular/core';
import { AbstractBaseComponent, LoaderModule } from '@telenet/ng-lib-page';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { CustomerMsaService } from './services/customer-msa.service';
import { ProductMsaInterface } from './interfaces/product-msa.interface';
import { MsaConstants } from './interfaces/msa-constants';
import { OptionProductsModel } from './models/option-products.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category, EventInfo } from 'udl';
import { InputOption, TgFormsModule } from '@telenet/ng-lib-form';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { TariffPlanContainerComponent } from './views/tariff-plans/tariff-plan.container';
import { GroupBundleComponent } from './views/group-bundle/group-bundle.component';
import { MatTabGroup, MatTab, MatTabLabel } from '@angular/material/tabs';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'tg-msa',
  templateUrl: './msa.container.html',
  standalone: true,
  imports: [
    LoaderModule,
    NgIf,
    TgFormsModule,
    ReactiveFormsModule,
    MatTabGroup,
    NgFor,
    MatTab,
    MatTabLabel,
    GroupBundleComponent,
    TariffPlanContainerComponent,
    TranslateModule,
    AsyncPipe,
  ],
})
export class MsaContainerComponent extends AbstractBaseComponent implements OnInit {
  @Input() componentInstanceId: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;

  section: string = MsaConstants.TARIFF_PLAN;

  customerMsa$: Observable<ProductMsaInterface[]>;
  customerMsaList: ProductMsaInterface[] = [];
  currentMsa$: BehaviorSubject<ProductMsaInterface> = new BehaviorSubject<ProductMsaInterface>(
    {} as ProductMsaInterface
  );
  msaForm = new FormGroup({ msa: new FormControl('') });

  tabs: string[] = [MsaConstants.MSA_TAB_TARIFF_PLANS.toString(), MsaConstants.MSA_TAB_GROUP_BUNDLES.toString()];
  selectedTab = new FormControl(0, null);

  tariffPlanOptions: OptionProductsModel[] = [];

  constructor(
    private readonly dataLayerService: DataLayerService,
    private readonly customerMsaService: CustomerMsaService
  ) {
    super();
  }

  ngOnInit(): void {
    this.customerMsa$ = this.customerMsaService.getCustomerMsa('MSA').pipe(
      tap((customerMsa) => {
        if (customerMsa.length > 0) {
          const first = customerMsa[0];
          this.msaForm.get('msa').setValue(first.masterAgreementName);
          this.currentMsa$.next(first);
          this.refreshTariffPlanOptions();
          this.registerBundlesConsultedEvent();
        }
        this.customerMsaList = customerMsa;
      })
    );
  }

  getDropdownOptions(customerMsa: ProductMsaInterface[]): InputOption[] {
    return customerMsa.map((msa) => new InputOption(msa.masterAgreementName, 'msa', false));
  }

  onMsaSelectionChanged(masterAgreementName: string) {
    const newSelected = this.customerMsaList.filter((msa) => msa.masterAgreementName === masterAgreementName)[0];
    this.currentMsa$.next(newSelected);
    this.refreshTariffPlanOptions();
    this.resetSelectedOffers();
    this.registerBundlesConsultedEvent();
  }

  private refreshTariffPlanOptions(): void {
    this.section = MsaConstants.TARIFF_PLAN;
    this.currentMsa$.value.eligibleOffers.forEach((offer) => {
      this.tariffPlanOptions = this.filterDuplicateOptionProducts(offer.optionProducts);
    });
  }

  private resetSelectedOffers(): void {
    this.currentMsa$.value.eligibleOffers.forEach((element) => {
      element.isSelected = false;
    });
  }

  private filterDuplicateOptionProducts(optionProducts: OptionProductsModel[]): OptionProductsModel[] {
    const set = new Set();
    return optionProducts.filter((optionProduct) => {
      const seen = set.has(optionProduct.label);
      if (!seen) {
        set.add(optionProduct.label);
        return true;
      }
      return false;
    });
  }

  private registerBundlesConsultedEvent(): void {
    const attributes = {};

    const type: string = MsaConstants.EVENT_TYPE_CLICK;
    const category: Category = this.dataLayerService.getCategory(this.componentInstanceId);
    const msgGroup: string = MsaConstants.MESSAGE_GROUP;
    const eventInfo: EventInfo = this.dataLayerService.createEventInfo(
      MsaConstants.EVENT_NAME_GROUP_BUNDLE_CONSULTED,
      type,
      [msgGroup]
    );
    this.dataLayerService.sendEvent({ eventInfo, attributes, category });
  }
}
