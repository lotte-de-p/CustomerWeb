import { ElementRef } from '@angular/core';
import { AbstractBaseComponent } from './abstract-base.component';
export declare abstract class AbstractCardComponent extends AbstractBaseComponent {
    protected elementRef: ElementRef;
    protected document?: Document | undefined;
    protected constructor(elementRef: ElementRef, document?: Document | undefined);
    hideCard(): void;
    showSimpleCard(): void;
    hideSimpleCard(): void;
    showCardWithData<T>(data: T): void;
    updateCardTarget(url: string): void;
    processClick(url: string): void;
    private get parentCardElement();
}
//# sourceMappingURL=abstract-card.component.d.ts.map