import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Param, RequestParam } from '../interfaces/request-param';
import { Injectable } from '@angular/core';
import { JsonUrlService } from '@telenet/ng-lib-page';
import { NBAList } from './nba-list.model';
import { NBA } from './nba.model';
import { SellingArgument } from './selling-argument.model';
import { SalesDataService } from '../../../../sales/service/sales-data.service';
import { Builder } from '@telenet/ng-lib-shared';
import { SalesData } from '../../../../sales/models/sales-data.model';

@Injectable({ providedIn: 'root' })
export class NBARequestParameters {
  private readonly nbaRequestParameters: RequestParam[];
  private requestObservables: Observable<unknown>[];

  constructor(
    private readonly salesDataService: SalesDataService,
    private readonly jsonUrlService: JsonUrlService
  ) {
    const url = window.location.href;
    this.nbaRequestParameters = Object.keys(Param)
      .map((param) => {
        const value = new URL(url).searchParams.get(param);
        return value ? new RequestParam(param, value) : undefined;
      })
      .filter((el) => el !== undefined) as RequestParam[];
  }

  public toNBAList(): Observable<NBAList> {
    if (this.getRequestParamValue(Param.t) !== 'nbo') {
      return of(new NBAList());
    } else {
      this.requestObservables = [];
      this.requestObservables.push(
        this.salesDataService.getDecompressedSalesData(this.getRequestParamValue(Param.sdata))
      );
      if (this.getRequestParamValue(Param.tid)) {
        this.requestObservables.push(
          this.deCompressRequestParamValue(this.getRequestParamValue(Param.tid)).pipe(
            map((treatmentId: unknown) => treatmentId)
          )
        );
      }
      if (this.getRequestParamValue(Param.pt)) {
        this.requestObservables.push(
          this.deCompressRequestParamValue(this.getRequestParamValue(Param.pt)).pipe(
            map((productType: unknown) => productType)
          )
        );
      }
      if (this.getRequestParamValue(Param.aid)) {
        this.requestObservables.push(
          this.deCompressRequestParamValue(this.getRequestParamValue(Param.aid)).pipe(map((name: unknown) => name))
        );
      }
      return this.constructNbaListFromRequestParam();
    }
  }

  private constructNbaListFromRequestParam(): Observable<NBAList> {
    return forkJoin(this.requestObservables).pipe(
      map(([salesDataDecompressed, treatmentId, productType, name]) => {
        const nba = Builder(NBA)
          // @ts-ignore
          .sdata(salesDataDecompressed as SalesData)
          .sellingArguments(this.createSellingArguments(this.getRequestParamValueAsArray(Param.sa)))
          .campaignId(this.getRequestParamValue(Param.cid))
          .treatment(treatmentId ? (treatmentId as string)['tid'] : '')
          .productType(productType ? (productType as string)['pt'] : '')
          .name(name ? (name as string)['aid'] : '')
          .build();

        return (
          Builder(NBAList)
            // @ts-ignore
            .actions([nba])
            .channel(this.getRequestParamValue(Param.src))
            .interactionId(this.getRequestParamValue(Param.did))
            .v(this.getRequestParamValue(Param.v))
            .isSuccess(true)
            .build()
        );
      })
    );
  }

  private getRequestParam(key: Param): RequestParam {
    return this.nbaRequestParameters.find((param) => param.key === key) as RequestParam;
  }

  private getRequestParamValue(key: Param): string {
    const requestParam = this.getRequestParam(key);
    return requestParam ? requestParam.value : '';
  }

  private getRequestParamValueAsArray(key: Param): string[] {
    const requestParam = this.getRequestParam(key);
    return requestParam ? requestParam.value.split(',') : [];
  }

  private createSellingArguments(sa: string[]): SellingArgument[] {
    let rank = 1;
    const sellingArguments: SellingArgument[] = [];
    sa.forEach((saParam) => sellingArguments.push(new SellingArgument(saParam, rank++)));

    return sellingArguments;
  }

  private deCompressRequestParamValue(paramValue: string): Observable<unknown> {
    return this.jsonUrlService.decompress(paramValue) as Observable<unknown>;
  }
}
