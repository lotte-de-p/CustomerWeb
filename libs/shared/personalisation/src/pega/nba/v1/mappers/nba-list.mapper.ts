import { Injectable } from '@angular/core';
import { Builder, MapperInterface } from '@telenet/ng-lib-shared';
import { NBAList } from '../models/nba-list.model';
import {
  RawNBAInterface,
  RawNBAListInterface,
  RawNBAResponseInterface,
  RawSellingArgument,
} from '../interfaces/raw-nba-list.interface';
import { SellingArgument } from '../models/selling-argument.model';
import { NBA } from '../models/nba.model';
import { SalesData } from '../../../../sales';

@Injectable({
  providedIn: 'root',
})
export class NBAListMapper implements MapperInterface<RawNBAResponseInterface, NBAList> {
  toModel(response: RawNBAResponseInterface): NBAList {
    if (response && response.nextBestActions) {
      return this.createNBAListResponse(response.nextBestActions);
    }

    return new NBAList();
  }

  public createNBAListResponse(rawNbaList: RawNBAListInterface): NBAList {
    return (
      Builder(NBAList)
        // @ts-ignore
        .actions(this.createNBAs(rawNbaList.actions))
        .customerNumber(rawNbaList.customerNumber)
        .interactionId(rawNbaList.interactionId)
        .channel(rawNbaList.channel)
        .containerName(rawNbaList.containerName)
        .v(rawNbaList.v)
        .isSuccess(true)
        .build()
    );
  }

  private createNBAs(rawActions: RawNBAInterface[]): NBA[] {
    if (!rawActions) {
      return [new NBA()];
    }

    return rawActions.map((rawAction) => {
      return (
        Builder(NBA)
          // @ts-ignore
          .sdata(new SalesData(rawAction.sdata))
          .rank(rawAction.rank)
          .group(rawAction.group)
          .issue(rawAction.issue)
          .name(rawAction.name)
          .treatment(rawAction.treatment)
          .campaignId(rawAction.campaignId)
          .productType(rawAction.productType)
          .sellingArguments(this.createSellingArguments(rawAction.sellingArguments))
          .build()
      );
    });
  }

  private createSellingArguments(rawSellingArguments: RawSellingArgument[]): SellingArgument[] {
    return (
      rawSellingArguments &&
      rawSellingArguments.map((rawSellingArgument) => {
        return new SellingArgument(rawSellingArgument.key, rawSellingArgument.rank);
      })
    );
  }
}
