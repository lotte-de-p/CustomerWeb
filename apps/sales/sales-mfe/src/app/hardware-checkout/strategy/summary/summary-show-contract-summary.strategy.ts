import { contractGenerationErrorNotification } from '@sales/summary/data-access';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { UrlService } from '@telenet/ng-lib-page';
import { forkJoin, iif, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { HardwareCheckoutConstants } from '../../constants/hardware-checkout.constants';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { EventStrategy } from '../../interfaces/event-strategy.interface';

export class SummaryShowContractSummaryStrategy implements EventStrategy {
  constructor(
    private readonly urlService: UrlService,
    private readonly configService: ConfigService,
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade
  ) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    return forkJoin([
      this.hardwareCheckoutFacade.contractSummaryUrl$.pipe(take(1)),
      this.hardwareCheckoutFacade.contractSummaryGenerationNotPossible$.pipe(take(1)),
    ]).pipe(
      mergeMap(([contractSummaryUrl, contractSummaryGenerationNotPossible]) => {
        if (contractSummaryGenerationNotPossible && !contractSummaryUrl) {
          this.hardwareCheckoutFacade.addSummaryGeneralNotification(contractGenerationErrorNotification);
          return of(undefined);
        } else {
          return iif(() => !contractSummaryUrl, this.generateContractSummary(), of(contractSummaryUrl));
        }
      }),
      map((contractSummaryUrl) => {
        if (contractSummaryUrl) {
          this.urlService.openNewTab(contractSummaryUrl);
        }
      }),
      map(() => false)
    );
  }

  private generateContractSummary() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe(
      take(1),
      mergeMap((salesOrder) => {
        if (salesOrder) {
          return this.hardwareCheckoutFacade.generateContractSummary(salesOrder?.id).pipe(
            catchError((error) => {
              console.error('Error while generating contract summary', error);
              return of(undefined);
            })
          );
        }
        console.error('Error while generating contract summary.  SalesOrder not set in state');
        return of(undefined);
      }),
      map((contractSummaryResponse) => {
        let contractSummaryUrl: string | undefined;
        if (contractSummaryResponse) {
          contractSummaryUrl = this.generateContractSummaryURL(contractSummaryResponse.uuid);
          this.hardwareCheckoutFacade.setContractSummaryUrl(contractSummaryUrl);
        }
        return contractSummaryUrl;
      }),
      map((contractSummaryUrl) => {
        if (!contractSummaryUrl) {
          this.hardwareCheckoutFacade.addSummaryGeneralNotification(contractGenerationErrorNotification);
        }
        return contractSummaryUrl;
      })
    );
  }

  private generateContractSummaryURL(documentId: string): string {
    return this.configService
      .getConfig(ConfigConstants.OCAPI_URl)
      .concat(HardwareCheckoutConstants.CONTRACT_SUMMARY_ENDPOINT)
      .concat(documentId);
  }
}
