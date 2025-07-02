import { SofyRequestAddress } from './sofy-request-address';
import { SofyRequestStreamingService } from './sofy-request-streaming-service';
export interface SofyRequestProduct {
    correlationid?: string;
    omapiid: string;
    installationaddress: SofyRequestAddress;
    options: string[];
    streamingservices?: SofyRequestStreamingService[];
    optinproducts: string[];
    installtype?: string;
    amountoflimitedsims?: number;
}
//# sourceMappingURL=sofy-request-product.d.ts.map