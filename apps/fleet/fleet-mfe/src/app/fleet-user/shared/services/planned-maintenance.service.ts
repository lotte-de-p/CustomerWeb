import { Injectable } from '@angular/core';
import sortBy from 'lodash-es/sortBy';
import isEmpty from 'lodash-es/isEmpty';
import uniqBy from 'lodash-es/uniqBy';
import { forkJoin, Observable, Subject } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { AddressConstants } from '../constants/address.constant';
import { PlannedMaintenanceModel } from '../models/planned-maintenance.model';
import { ProductSubscriptionsInterface } from '../interfaces/product/product-subscriptions.interface';
import { FleetUserProductService } from './product/fleet-user-product.service';
import { AccountSelectorService } from './account-selector.service';
import { AccountSelectorConstants } from '../constants/account-selector.constant';
import { PlannedMaintenanceMapper } from '../mappers/planned-maintenance.mapper';

@Injectable({
  providedIn: 'root',
})
export class PlannedMaintenanceService {
  addressLines: ProductSubscriptionsInterface[];
  isInitialized: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly addressLineProcessing = new Subject<any>();
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly plannedMaintenanceMapper: PlannedMaintenanceMapper,
    private readonly productService: FleetUserProductService,
    private readonly accountSelectorService: AccountSelectorService
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadPLMAddressLines(messageGroupName: string): Observable<any> {
    // eslint-disable-next-line rxjs/finnish
    const productLines = this.productService.getProductLinesByType(
      messageGroupName,
      AccountSelectorConstants.PRODUCT_TYPE_PLAN,
      null,
      null
    );
    // eslint-disable-next-line rxjs/finnish
    const plmDetails = this.getPlannedMaintenanceData(messageGroupName);
    forkJoin([productLines, plmDetails]).subscribe({
      next: (details) => {
        if (!isEmpty(details[0])) {
          this.addressLines = uniqBy(details[0], 'addressId');
          this.addressLines = sortBy(this.addressLines, 'activationDate');
          // eslint-disable-next-line rxjs/no-nested-subscribe
          this.accountSelectorService.loadAddresses(messageGroupName, this.addressLines).subscribe(() => {
            this.setPlannedMaintenanceForAddress(details[1]);
            this.isInitialized = true;
            this.addressLineProcessing.next(null);
          });
        } else {
          this.accountSelectorService.setError(false, 'address-line');
        }
      },
      error: () => {
        this.accountSelectorService.setError(true, '');
      },
    });

    return this.addressLineProcessing.asObservable();
  }

  private getPlannedMaintenanceData(messageGroup: string): Observable<PlannedMaintenanceModel[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig(messageGroup, AddressConstants.PLM_ENDPOINT, this.plannedMaintenanceMapper)
    );
  }

  private setPlannedMaintenanceForAddress(plmActivities: PlannedMaintenanceModel[]): void {
    this.addressLines.forEach((currentAdressLine) => {
      let plannedMaintenance: PlannedMaintenanceModel[] = [];
      plannedMaintenance = plmActivities.filter(
        (plmActivity) => plmActivity.addressId === currentAdressLine.address.tinaLocationId
      );
      if (plannedMaintenance && plannedMaintenance.length > 0) {
        currentAdressLine.address.plannedMaintenance = plannedMaintenance;
      }
    });
  }
}
