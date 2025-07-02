import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';
import { SofyProduct } from '../models/sofy-product';
import { SofyCustomerProductHoldingProduct } from '../models/sofy-customer-product-holding-product';
import { SofyModemDetails } from '../models/sofy-modem-details';
import { SofyRequestProduct } from '../models/request';
import { CustomerInstallationDetailsInterface } from '../interfaces/installation-details-response.interface';
import { Promotion } from '../models/promotion.model';
import * as i0 from "@angular/core";
export declare class SofyService {
    private readonly http;
    private readonly urlService;
    private readonly configService;
    private readonly pathCategorisationService;
    private readonly PARAM_DATE;
    constructor(http: HttpClient, urlService: UrlService, configService: ConfigService, pathCategorisationService: PathCategorisationService);
    sofyProducts(products: SofyProduct[], rawCustomerProductHolding: SofyCustomerProductHoldingProduct[], targetGroups: Promotion[], rawModemDetails: SofyModemDetails[], voucherPromo: string, campaignCode: string, messageGroup: string): Observable<unknown>;
    getSalesOfferWithOmapiId(products: SofyRequestProduct[] | SofyProduct[], messageGroup: string): Observable<unknown>;
    getSalesOffer(products: SofyRequestProduct[], promotions: Promotion[], rawModemDetails: SofyModemDetails[], rawCustomerProductHolding: SofyCustomerProductHoldingProduct[], voucherPromo: string, campaignCode: string, messageGroup: string, installationDetails?: CustomerInstallationDetailsInterface, standaloneOptions?: SofyRequestProduct[]): Observable<unknown>;
    private doPost;
    private getHttpOptions;
    private createHttpHeaders;
    private getSofyUrl;
    isBaseCustomer(): boolean;
    private getDateFromUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<SofyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SofyService>;
}
//# sourceMappingURL=sofy.service.d.ts.map