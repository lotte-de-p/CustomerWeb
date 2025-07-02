import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class TgTelenetTestingModule {
    static forRoot() {
        return {
            ngModule: TgTelenetTestingModule,
            providers: [{ provide: 'Window', useValue: window }, FormGroupDirective],
        };
    }
    static ɵfac = function TgTelenetTestingModule_Factory(t) { return new (t || TgTelenetTestingModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TgTelenetTestingModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TgTelenetTestingModule, [{
        type: NgModule,
        args: [{
                imports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule],
                exports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TgTelenetTestingModule, { imports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule], exports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZW5ldC1jb21tb24tdGVzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvdGVzdGluZy90ZWxlbmV0LWNvbW1vbi10ZXN0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQU0vQyxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztTQUN6RSxDQUFDO0lBQ0osQ0FBQztnRkFOVSxzQkFBc0I7NERBQXRCLHNCQUFzQjtnRUFIdkIsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFDaEUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFlBQVk7O2lGQUUvRCxzQkFBc0I7Y0FKbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7Z0JBQzNFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7YUFDNUU7O3dGQUNZLHNCQUFzQixjQUh2QixnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxhQUNoRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUZ1RlbGVuZXRUZXN0aW5nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZ1RlbGVuZXRUZXN0aW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUZ1RlbGVuZXRUZXN0aW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnV2luZG93JywgdXNlVmFsdWU6IHdpbmRvdyB9LCBGb3JtR3JvdXBEaXJlY3RpdmVdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==