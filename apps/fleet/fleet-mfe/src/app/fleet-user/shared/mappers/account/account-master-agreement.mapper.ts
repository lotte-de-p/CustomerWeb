import { Injectable } from '@angular/core';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { MapperInterface } from '@telenet/ng-lib-shared';
import {
  AccountMasterAgreementInterface,
  Bundle,
  MasterAgreement,
} from '../../interfaces/account/account-bundle-agreement.interface';
import {
  RawAccountMasterAgreementInterface,
  RawBundle,
  RawMasterAgreement,
} from '../../interfaces/raw/raw-account-bundle-agreement.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountMasterAgreementMapper
  implements MapperInterface<RawAccountMasterAgreementInterface, AccountMasterAgreementInterface>
{
  constructor(private readonly omapiMapper: OmapiProductMapper) {}

  toModel(rawAccountMasterAgreement: RawAccountMasterAgreementInterface): AccountMasterAgreementInterface {
    const accountMasterAgreement = {} as AccountMasterAgreementInterface;

    accountMasterAgreement.activeMSA = this.createActiveMsa(rawAccountMasterAgreement.activeMSA);

    return accountMasterAgreement;
  }

  private createActiveMsa(rawMasterAgreement: RawMasterAgreement[]): MasterAgreement[] {
    const activeMasterAgreements = [] as MasterAgreement[];

    rawMasterAgreement.forEach((rawAgreement) => {
      const masterAgreement = {} as MasterAgreement;

      masterAgreement.bundles = this.createBundle(rawAgreement.bundles);

      activeMasterAgreements.push(masterAgreement);
    });

    return activeMasterAgreements;
  }

  private createBundle(rawBundles: RawBundle[]): Bundle[] {
    const bundles = [];

    rawBundles.forEach((rawBundle) => {
      const bundle = {} as Bundle;

      bundle.externalProductCode = rawBundle.externalProductCode;
      bundle.name = rawBundle.name;
      bundle.activePlan = rawBundle.activePlan;
      bundle.productInfo = this.omapiMapper.toModel(rawBundle.rawOmapi);

      bundles.push(bundle);
    });

    return bundles;
  }
}
