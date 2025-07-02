import { Injectable } from '@angular/core';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawTIPChargeInterface, RawTIPContractInterface } from '../interfaces/raw-tip-contract.interface';
import { TIPChargeInterface, TIPContractInterface } from '../interfaces/tip-contract.interface';
import { PromotionServiceConstants } from '../constants/promotion-service.constants';

export enum TIPContractStatusEnum {
  ACTIVE = 'Active',
  DISCONNECTED = 'Disconnected',
  DISABLED = 'Disabled',
}

@Injectable({
  providedIn: 'root',
})
// eslint-disable-next-line max-len
export class TIPContractsMapper
  implements
    MapperInterface<RawTIPContractInterface[] | RawTIPContractInterface, TIPContractInterface[] | TIPContractInterface>
{
  constructor(private readonly omapiProductMapper: OmapiProductMapper) {}

  toModel(rawTIPContracts: RawTIPContractInterface[] | RawTIPContractInterface): TIPContractInterface[] {
    return this.createTIPContracts(rawTIPContracts);
  }

  // eslint-disable-next-line max-len
  private createTIPContracts(
    rawTIPContracts: RawTIPContractInterface[] | RawTIPContractInterface
  ): TIPContractInterface[] {
    if (rawTIPContracts instanceof Array) {
      return (
        rawTIPContracts &&
        rawTIPContracts.map((rawTIPContract) => {
          return this.createTIPContract(rawTIPContract);
        })
      );
    } else {
      return [this.createTIPContract(rawTIPContracts)];
    }
  }

  private createTIPContract(rawTIPContract: RawTIPContractInterface): TIPContractInterface {
    const tipContract = {} as TIPContractInterface;
    if (rawTIPContract) {
      tipContract.activationDate = rawTIPContract.activationDate;
      tipContract.cancellationDate = rawTIPContract.cancellationDate;
      tipContract.planName = rawTIPContract.planName;
      tipContract.customerProductId = rawTIPContract.customerProductId;
      tipContract.epc = rawTIPContract.epc;
      tipContract.status = rawTIPContract.status;
      tipContract.normalizedStatus = this.getNormalizedStatus(rawTIPContract?.status);
      tipContract.tipMRC = this.createTIPUsage(rawTIPContract.tipMRC);
      tipContract.tipNRC = this.createTIPUsage(rawTIPContract.tipNRC);
      tipContract.tipUsage = this.createTIPUsage(rawTIPContract.tipUsage);
      tipContract.productInfo = this.omapiProductMapper.toModel(rawTIPContract.rawOmapi);
      tipContract.noOfEmployees = rawTIPContract.noOfEmployees;
      tipContract.futureProcessingDate = rawTIPContract.futureProcessingDate;
      tipContract.displayPlanName = tipContract.planName.replace(
        PromotionServiceConstants.TELENET_INCENTIVE_PLAN,
        PromotionServiceConstants.TIP
      );
    }
    return tipContract;
  }

  private createTIPUsage(rawTIPUsage: RawTIPChargeInterface): TIPChargeInterface {
    const tipUsage = {} as TIPChargeInterface;
    if (rawTIPUsage) {
      tipUsage.vatExcl = rawTIPUsage.vatExcl.replace('.', ',');
      tipUsage.vatIncl = rawTIPUsage.vatIncl.replace('.', ',');
    }

    return tipUsage;
  }

  private getNormalizedStatus(status: string | undefined): string {
    if (!status) {
      return '';
    }
    if (status.toLowerCase() === TIPContractStatusEnum.ACTIVE.toLowerCase()) {
      return TIPContractStatusEnum.ACTIVE;
    }

    if (status.toLowerCase() === TIPContractStatusEnum.DISCONNECTED.toLowerCase()) {
      return TIPContractStatusEnum.DISCONNECTED;
    }
    return TIPContractStatusEnum.DISABLED;
  }
}
