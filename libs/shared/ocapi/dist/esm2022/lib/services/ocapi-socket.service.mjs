import { Injectable } from '@angular/core';
import SockJS from 'sockjs-client';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { RxStomp } from '@stomp/rx-stomp';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-config";
export class OcapiSocketService {
    configService;
    baseUrl;
    isAnonymous = false;
    TOPIC_PREFIX;
    ANONYMOUS_TOPIC_PREFIX;
    stompClient;
    isInitialised;
    constructor(configService) {
        this.configService = configService;
        this.TOPIC_PREFIX = '/user/topic/';
        this.ANONYMOUS_TOPIC_PREFIX = '/topic/action/';
        this.baseUrl = configService.getConfig(ConfigConstants.OCAPI_URl) + '/notify/';
        this.isInitialised = false;
    }
    init() {
        this.initializeWebSocketConnection();
        this.isInitialised = true;
    }
    setAnonymous(anonymous) {
        this.isAnonymous = anonymous;
    }
    getTopicPrefix() {
        return this.isAnonymous ? this.ANONYMOUS_TOPIC_PREFIX : this.TOPIC_PREFIX;
    }
    initializeWebSocketConnection() {
        this.stompClient = new RxStomp();
        const stompConfig = {
            webSocketFactory: () => {
                return new SockJS(this.baseUrl);
            },
        };
        this.stompClient.configure(stompConfig);
        this.stompClient.activate();
    }
    watchStompClientOnTopic(topic) {
        if (!this.isInitialised) {
            this.init();
        }
        return this.stompClient.watch(this.getTopicPrefix() + topic);
    }
    static ɵfac = function OcapiSocketService_Factory(t) { return new (t || OcapiSocketService)(i0.ɵɵinject(i1.ConfigService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OcapiSocketService, factory: OcapiSocketService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OcapiSocketService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.ConfigService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NhcGktc29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL29jYXBpLXNvY2tldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxNQUFNLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQWlCLE1BQU0sd0JBQXdCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE9BQU8sRUFBaUIsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS3pELE1BQU0sT0FBTyxrQkFBa0I7SUFRUjtJQVByQixPQUFPLENBQVM7SUFDaEIsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixZQUFZLENBQVM7SUFDckIsc0JBQXNCLENBQVM7SUFDL0IsV0FBVyxDQUFVO0lBQ2IsYUFBYSxDQUFVO0lBRS9CLFlBQXFCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO1FBQ25DLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMvRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBa0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM1RSxDQUFDO0lBRUQsNkJBQTZCO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVqQyxNQUFNLFdBQVcsR0FBa0I7WUFDakMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO2dCQUNyQixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxDQUFDO1NBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELHVCQUF1QixDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs0RUEvQ1Usa0JBQWtCO2dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOztpRkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFNvY2tKUyBmcm9tICdzb2NranMtY2xpZW50JztcbmltcG9ydCB7IENvbmZpZ0NvbnN0YW50cywgQ29uZmlnU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUnhTdG9tcCwgUnhTdG9tcENvbmZpZyB9IGZyb20gJ0BzdG9tcC9yeC1zdG9tcCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2FwaVNvY2tldFNlcnZpY2Uge1xuICBiYXNlVXJsOiBzdHJpbmc7XG4gIGlzQW5vbnltb3VzID0gZmFsc2U7XG4gIFRPUElDX1BSRUZJWDogc3RyaW5nO1xuICBBTk9OWU1PVVNfVE9QSUNfUFJFRklYOiBzdHJpbmc7XG4gIHN0b21wQ2xpZW50OiBSeFN0b21wO1xuICBwcml2YXRlIGlzSW5pdGlhbGlzZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuVE9QSUNfUFJFRklYID0gJy91c2VyL3RvcGljLyc7XG4gICAgdGhpcy5BTk9OWU1PVVNfVE9QSUNfUFJFRklYID0gJy90b3BpYy9hY3Rpb24vJztcbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWdTZXJ2aWNlLmdldENvbmZpZyhDb25maWdDb25zdGFudHMuT0NBUElfVVJsKSArICcvbm90aWZ5Lyc7XG4gICAgdGhpcy5pc0luaXRpYWxpc2VkID0gZmFsc2U7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVdlYlNvY2tldENvbm5lY3Rpb24oKTtcbiAgICB0aGlzLmlzSW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgc2V0QW5vbnltb3VzKGFub255bW91czogYm9vbGVhbikge1xuICAgIHRoaXMuaXNBbm9ueW1vdXMgPSBhbm9ueW1vdXM7XG4gIH1cblxuICBnZXRUb3BpY1ByZWZpeCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzID8gdGhpcy5BTk9OWU1PVVNfVE9QSUNfUFJFRklYIDogdGhpcy5UT1BJQ19QUkVGSVg7XG4gIH1cblxuICBpbml0aWFsaXplV2ViU29ja2V0Q29ubmVjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnN0b21wQ2xpZW50ID0gbmV3IFJ4U3RvbXAoKTtcblxuICAgIGNvbnN0IHN0b21wQ29uZmlnOiBSeFN0b21wQ29uZmlnID0ge1xuICAgICAgd2ViU29ja2V0RmFjdG9yeTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFNvY2tKUyh0aGlzLmJhc2VVcmwpO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5zdG9tcENsaWVudC5jb25maWd1cmUoc3RvbXBDb25maWcpO1xuICAgIHRoaXMuc3RvbXBDbGllbnQuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIHdhdGNoU3RvbXBDbGllbnRPblRvcGljKHRvcGljOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHVua25vd24+IHtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXNlZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RvbXBDbGllbnQud2F0Y2godGhpcy5nZXRUb3BpY1ByZWZpeCgpICsgdG9waWMpO1xuICB9XG59XG4iXX0=