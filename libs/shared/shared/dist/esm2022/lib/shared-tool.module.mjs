import { NgModule } from '@angular/core';
import { WindowService } from './window/window.service';
import { LogFactory } from './debug/log.factory';
import { DomService } from './dom/dom-service/dom-service';
import { CircularPlayerModule } from './ui/circular-audio-player';
import * as i0 from "@angular/core";
export class SharedToolModule {
    static ɵfac = function SharedToolModule_Factory(t) { return new (t || SharedToolModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedToolModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [WindowService, LogFactory, DomService], imports: [CircularPlayerModule, CircularPlayerModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedToolModule, [{
        type: NgModule,
        args: [{
                imports: [CircularPlayerModule],
                providers: [WindowService, LogFactory, DomService],
                exports: [CircularPlayerModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedToolModule, { imports: [CircularPlayerModule], exports: [CircularPlayerModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXRvb2wubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zaGFyZWQtdG9vbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFPbEUsTUFBTSxPQUFPLGdCQUFnQjswRUFBaEIsZ0JBQWdCOzREQUFoQixnQkFBZ0I7aUVBSGhCLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsWUFEeEMsb0JBQW9CLEVBRXBCLG9CQUFvQjs7aUZBRW5CLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7d0ZBQ1ksZ0JBQWdCLGNBSmpCLG9CQUFvQixhQUVwQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93L3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ0ZhY3RvcnkgfSBmcm9tICcuL2RlYnVnL2xvZy5mYWN0b3J5JztcbmltcG9ydCB7IERvbVNlcnZpY2UgfSBmcm9tICcuL2RvbS9kb20tc2VydmljZS9kb20tc2VydmljZSc7XG5pbXBvcnQgeyBDaXJjdWxhclBsYXllck1vZHVsZSB9IGZyb20gJy4vdWkvY2lyY3VsYXItYXVkaW8tcGxheWVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NpcmN1bGFyUGxheWVyTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbV2luZG93U2VydmljZSwgTG9nRmFjdG9yeSwgRG9tU2VydmljZV0sXG4gIGV4cG9ydHM6IFtDaXJjdWxhclBsYXllck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZFRvb2xNb2R1bGUge31cbiJdfQ==