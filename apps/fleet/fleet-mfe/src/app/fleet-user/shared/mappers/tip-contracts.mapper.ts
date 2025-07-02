import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import isEmpty from 'lodash-es/isEmpty';
import { TIPChargeInterface, TIPContractInterface } from '../interfaces/tip-contract.interface';
import { RawTIPChargeInterface, RawTIPContractInterface } from '../interfaces/raw/raw-tip-contract.interface';
import { TIPContractsOverviewConstants } from '../constants/tip-contracts-overview.constant';
import { TIPContractStatusEnum } from '../enums/tip-contract-status.enum';

@Injectable({
  providedIn: 'root',
})
// eslint-disable-next-line max-len
export class TIPContractsMapper
  implements
    MapperInterface<RawTIPContractInterface[] | RawTIPContractInterface, TIPContractInterface[] | TIPContractInterface>
{
  constructor(private readonly omapiProductMapper: OmapiProductMapper) {}

  toModel(
    rawTIPContracts: RawTIPContractInterface[] | RawTIPContractInterface
  ): TIPContractInterface[] | TIPContractInterface {
    return this.createTIPContracts(rawTIPContracts);
  }

  // eslint-disable-next-line max-len
  private createTIPContracts(
    rawTIPContracts: RawTIPContractInterface[] | RawTIPContractInterface
  ): TIPContractInterface[] | TIPContractInterface {
    if (rawTIPContracts instanceof Array) {
      return (
        rawTIPContracts &&
        rawTIPContracts.map((rawTIPContract) => {
          return this.createTIPContract(rawTIPContract);
        })
      );
    } else {
      return this.createTIPContract(rawTIPContracts);
    }
  }

  private createTIPContract(rawTIPContract: RawTIPContractInterface): TIPContractInterface {
    const tipContract = {} as TIPContractInterface;
    if (!isEmpty(rawTIPContract)) {
      tipContract.activationDate = rawTIPContract.activationDate;
      tipContract.cancellationDate = rawTIPContract.cancellationDate;
      tipContract.planName = rawTIPContract.planName;
      tipContract.customerProductId = rawTIPContract.customerProductId;
      tipContract.epc = rawTIPContract.epc;
      tipContract.status = rawTIPContract.status;
      tipContract.normalizedStatus = rawTIPContract.status && this.getNormalizedStatus(rawTIPContract.status);
      tipContract.tipMRC = this.createTIPUsage(rawTIPContract.tipMRC);
      tipContract.tipNRC = this.createTIPUsage(rawTIPContract.tipNRC);
      tipContract.tipUsage = this.createTIPUsage(rawTIPContract.tipUsage);
      tipContract.productInfo = this.omapiProductMapper.toModel(rawTIPContract.rawOmapi);
      tipContract.noOfEmployees = rawTIPContract.noOfEmployees;
      tipContract.futureProcessingDate = rawTIPContract.futureProcessingDate;
      tipContract.displayPlanName = this.getDisplayPlanName(tipContract, rawTIPContract);
    }
    return tipContract;
  }

  private getDisplayPlanName(tipContract: TIPContractInterface, rawTipContract: RawTIPContractInterface): string {
    const friendlyPlanName = rawTipContract.friendlyPlanName;
    return friendlyPlanName
      ? friendlyPlanName
      : tipContract.planName.replace(
          TIPContractsOverviewConstants.TELENET_INCENTIVE_PLAN,
          TIPContractsOverviewConstants.TIP
        );
  }

  private createTIPUsage(rawTIPUsage: RawTIPChargeInterface): TIPChargeInterface {
    const tipUsage = {} as TIPChargeInterface;
    if (!isEmpty(rawTIPUsage)) {
      tipUsage.vatExcl = rawTIPUsage.vatExcl.replace('.', ',');
      tipUsage.vatIncl = rawTIPUsage.vatIncl.replace('.', ',');
    }

    return tipUsage;
  }

  private getNormalizedStatus(status: string): string {
    if (status.toLowerCase() === TIPContractStatusEnum.ACTIVE.toLowerCase()) {
      return TIPContractStatusEnum.ACTIVE;
    }

    if (status.toLowerCase() === TIPContractStatusEnum.DISCONNECTED.toLowerCase()) {
      return TIPContractStatusEnum.DISCONNECTED;
    }
    return TIPContractStatusEnum.DISABLED;
  }
}
