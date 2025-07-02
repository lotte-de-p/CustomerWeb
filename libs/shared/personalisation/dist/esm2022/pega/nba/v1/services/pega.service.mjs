import { Inject, Injectable } from '@angular/core';
import { iif, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { NBAList } from '../models/nba-list.model';
import { OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { NBAConstants } from '../../constants/nba.constant';
import { ContexthubConstants } from '@telenet/ng-lib-page';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
import * as i1 from "../models/nba-request-parameters";
import * as i2 from "../mappers/nba-list.mapper";
import * as i3 from "@telenet/ng-lib-ocapi";
export class PegaService {
    window;
    nbaRequestParameters;
    nbaListMapper;
    ocapiService;
    loginService;
    log = LogFactory.createLogger(PegaService);
    constructor(window, nbaRequestParameters, nbaListMapper, ocapiService, loginService) {
        this.window = window;
        this.nbaRequestParameters = nbaRequestParameters;
        this.nbaListMapper = nbaListMapper;
        this.ocapiService = ocapiService;
        this.loginService = loginService;
    }
    getNBAList() {
        const nbaFromRequest$ = this.getNBAFromRequest();
        return nbaFromRequest$.pipe(mergeMap((requestNbaList) => iif(() => !!requestNbaList.getNBA(), nbaFromRequest$, this.getNBAFromPegaAPI())));
    }
    getNBAFromRequest() {
        return this.nbaRequestParameters.toNBAList();
    }
    getNBAFromPegaAPI() {
        const enablePegaPersonalisation = this.window['ContextHub']['Constants']['PROP_ENABLE_PEGA_PERSONALIZATION'];
        return enablePegaPersonalisation === 'true' ? this.getAuthenticatedPegaNBAList() : of(new NBAList());
    }
    getAuthenticatedPegaNBAList() {
        return this.loginService
            .getLoginDetails()
            .pipe(mergeMap((loginDetails) => (loginDetails.isLoggedIn() ? this.getPegaNBAList() : of(new NBAList()))));
    }
    getPegaNBAList() {
        const endpoint = this.getServiceURI(NBAConstants.PEGA_NBA_ENDPOINT);
        const ocapiCallConfig = new OcapiCallConfig(ContexthubConstants.MESSAGE_GROUP_NBALIST, endpoint, this.nbaListMapper);
        return this.ocapiService.doGet(ocapiCallConfig).pipe(catchError((err) => this.handlePegaNbaError(err)));
    }
    handlePegaNbaError(err) {
        this.log.logError('Error while fetching NBA list from Pega.', err);
        return of(new NBAList());
    }
    getServiceURI(endpoint) {
        return NBAConstants.SERVICE_PREFIX.concat(NBAConstants.CONTEXT)
            .concat(NBAConstants.API_VERSION_V1)
            .concat(endpoint)
            .concat('?channel=')
            .concat(NBAConstants.CHANNEL);
    }
    static ɵfac = function PegaService_Factory(t) { return new (t || PegaService)(i0.ɵɵinject('Window'), i0.ɵɵinject(i1.NBARequestParameters), i0.ɵɵinject(i2.NBAListMapper), i0.ɵɵinject(i3.OcapiService), i0.ɵɵinject(i3.LoginService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PegaService, factory: PegaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PegaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i1.NBARequestParameters }, { type: i2.NBAListMapper }, { type: i3.OcapiService }, { type: i3.LoginService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVnYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3BlZ2EvbmJhL3YxL3NlcnZpY2VzL3BlZ2Euc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQWdCLGVBQWUsRUFBZ0IsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFPLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQVd6RCxNQUFNLE9BQU8sV0FBVztJQUllO0lBQ2xCO0lBQ0E7SUFDQTtJQUNBO0lBUEYsR0FBRyxHQUFRLFVBQVUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFakUsWUFDcUMsTUFBMkIsRUFDN0Msb0JBQTBDLEVBQzFDLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLFlBQTBCO1FBSlIsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFDN0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUMxQyxDQUFDO0lBRUcsVUFBVTtRQUNmLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FDekIsUUFBUSxDQUFDLENBQUMsY0FBdUIsRUFBRSxFQUFFLENBQ25DLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUNoRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDN0csT0FBTyx5QkFBeUIsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFTywyQkFBMkI7UUFDakMsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNyQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sZUFBZSxHQUFHLElBQUksZUFBZSxDQUN6QyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFDekMsUUFBUSxFQUNSLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkgsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEdBQVk7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsMENBQTBDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbkUsT0FBTyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyxhQUFhLENBQUMsUUFBZ0I7UUFDcEMsT0FBTyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQzVELE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO2FBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDaEIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7cUVBMURVLFdBQVcsY0FJWixRQUFRO2dFQUpQLFdBQVcsV0FBWCxXQUFXLG1CQURFLE1BQU07O2lGQUNuQixXQUFXO2NBRHZCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7O3NCQUs3QixNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlpZiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTkJBUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tICcuLi9tb2RlbHMvbmJhLXJlcXVlc3QtcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBOQkFMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL25iYS1saXN0Lm1vZGVsJztcbmltcG9ydCB7IExvZ2luU2VydmljZSwgT2NhcGlDYWxsQ29uZmlnLCBPY2FwaVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItb2NhcGknO1xuaW1wb3J0IHsgTkJBTGlzdE1hcHBlciB9IGZyb20gJy4uL21hcHBlcnMvbmJhLWxpc3QubWFwcGVyJztcbmltcG9ydCB7IE5CQUNvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9uYmEuY29uc3RhbnQnO1xuaW1wb3J0IHsgQ29udGV4dGh1YkNvbnN0YW50cyB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IExvZywgTG9nRmFjdG9yeSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1zaGFyZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRleHRIdWJDb25zdGFudHMge1xuICBDb250ZXh0SHViOiB7XG4gICAgQ29uc3RhbnRzOiB7XG4gICAgICBQUk9QX0VOQUJMRV9QRUdBX1BFUlNPTkFMSVpBVElPTjogc3RyaW5nO1xuICAgIH07XG4gIH07XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUGVnYVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZzogTG9nID0gTG9nRmFjdG9yeS5jcmVhdGVMb2dnZXIoUGVnYVNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBDb250ZXh0SHViQ29uc3RhbnRzLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmJhUmVxdWVzdFBhcmFtZXRlcnM6IE5CQVJlcXVlc3RQYXJhbWV0ZXJzLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmJhTGlzdE1hcHBlcjogTkJBTGlzdE1hcHBlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9jYXBpU2VydmljZTogT2NhcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXROQkFMaXN0KCk6IE9ic2VydmFibGU8TkJBTGlzdD4ge1xuICAgIGNvbnN0IG5iYUZyb21SZXF1ZXN0JCA9IHRoaXMuZ2V0TkJBRnJvbVJlcXVlc3QoKTtcbiAgICByZXR1cm4gbmJhRnJvbVJlcXVlc3QkLnBpcGUoXG4gICAgICBtZXJnZU1hcCgocmVxdWVzdE5iYUxpc3Q6IE5CQUxpc3QpID0+XG4gICAgICAgIGlpZigoKSA9PiAhIXJlcXVlc3ROYmFMaXN0LmdldE5CQSgpLCBuYmFGcm9tUmVxdWVzdCQsIHRoaXMuZ2V0TkJBRnJvbVBlZ2FBUEkoKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROQkFGcm9tUmVxdWVzdCgpOiBPYnNlcnZhYmxlPE5CQUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5uYmFSZXF1ZXN0UGFyYW1ldGVycy50b05CQUxpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TkJBRnJvbVBlZ2FBUEkoKTogT2JzZXJ2YWJsZTxOQkFMaXN0PiB7XG4gICAgY29uc3QgZW5hYmxlUGVnYVBlcnNvbmFsaXNhdGlvbiA9IHRoaXMud2luZG93WydDb250ZXh0SHViJ11bJ0NvbnN0YW50cyddWydQUk9QX0VOQUJMRV9QRUdBX1BFUlNPTkFMSVpBVElPTiddO1xuICAgIHJldHVybiBlbmFibGVQZWdhUGVyc29uYWxpc2F0aW9uID09PSAndHJ1ZScgPyB0aGlzLmdldEF1dGhlbnRpY2F0ZWRQZWdhTkJBTGlzdCgpIDogb2YobmV3IE5CQUxpc3QoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1dGhlbnRpY2F0ZWRQZWdhTkJBTGlzdCgpOiBPYnNlcnZhYmxlPE5CQUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5sb2dpblNlcnZpY2VcbiAgICAgIC5nZXRMb2dpbkRldGFpbHMoKVxuICAgICAgLnBpcGUobWVyZ2VNYXAoKGxvZ2luRGV0YWlscykgPT4gKGxvZ2luRGV0YWlscy5pc0xvZ2dlZEluKCkgPyB0aGlzLmdldFBlZ2FOQkFMaXN0KCkgOiBvZihuZXcgTkJBTGlzdCgpKSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGVnYU5CQUxpc3QoKTogT2JzZXJ2YWJsZTxOQkFMaXN0PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmdldFNlcnZpY2VVUkkoTkJBQ29uc3RhbnRzLlBFR0FfTkJBX0VORFBPSU5UKTtcbiAgICBjb25zdCBvY2FwaUNhbGxDb25maWcgPSBuZXcgT2NhcGlDYWxsQ29uZmlnKFxuICAgICAgQ29udGV4dGh1YkNvbnN0YW50cy5NRVNTQUdFX0dST1VQX05CQUxJU1QsXG4gICAgICBlbmRwb2ludCxcbiAgICAgIHRoaXMubmJhTGlzdE1hcHBlclxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5vY2FwaVNlcnZpY2UuZG9HZXQob2NhcGlDYWxsQ29uZmlnKS5waXBlKGNhdGNoRXJyb3IoKGVycjogdW5rbm93bikgPT4gdGhpcy5oYW5kbGVQZWdhTmJhRXJyb3IoZXJyKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQZWdhTmJhRXJyb3IoZXJyOiB1bmtub3duKSB7XG4gICAgdGhpcy5sb2cubG9nRXJyb3IoJ0Vycm9yIHdoaWxlIGZldGNoaW5nIE5CQSBsaXN0IGZyb20gUGVnYS4nLCBlcnIpO1xuXG4gICAgcmV0dXJuIG9mKG5ldyBOQkFMaXN0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXJ2aWNlVVJJKGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBOQkFDb25zdGFudHMuU0VSVklDRV9QUkVGSVguY29uY2F0KE5CQUNvbnN0YW50cy5DT05URVhUKVxuICAgICAgLmNvbmNhdChOQkFDb25zdGFudHMuQVBJX1ZFUlNJT05fVjEpXG4gICAgICAuY29uY2F0KGVuZHBvaW50KVxuICAgICAgLmNvbmNhdCgnP2NoYW5uZWw9JylcbiAgICAgIC5jb25jYXQoTkJBQ29uc3RhbnRzLkNIQU5ORUwpO1xuICB9XG59XG4iXX0=