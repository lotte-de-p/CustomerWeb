import * as i0 from "@angular/core";
export declare class DomService {
    findElementById(id: string): HTMLElement | null;
    appendScript(src: string, id?: string, onLoadCallback?: VoidFunction): void;
    scrollToElement(selector: string, delay?: number): void;
    scrollToStartElement(selector: string, delay?: number): void;
    scrollToTop(): void;
    getDomElement(selector: string): HTMLElement | null;
    toggleBodyOverflow(isBodyScrollable: boolean): void;
    scrollElementToTop(selector: string): void;
    scrollIntoViewBasedOnId(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomService>;
}
//# sourceMappingURL=dom-service.d.ts.map