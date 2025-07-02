import * as udl from 'udl';
import { DataLayerAttributes } from './interfaces/data-layer-attributes';
import { MessageService } from '@telenet/ng-lib-message';
import { EventProperties } from './interfaces/udl-event-properties';
import * as i0 from "@angular/core";
export declare class DataLayerService {
    private readonly messageService;
    private readonly window;
    private dataLayer;
    constructor(messageService: MessageService, window: Record<string, unknown>);
    init(): boolean;
    getDataLayer(): udl.DataLayer;
    setPage(page: udl.Page): Promise<boolean>;
    getCategory(componentInstanceId: string): udl.Category | null;
    createCategory(primaryCategory?: string, subCategory1?: string): udl.Category;
    addPageEvent(pageId: string, attributes?: Record<string, string | boolean | number>): void;
    addStepViewEvent(attributes: DataLayerAttributes): Promise<boolean>;
    createEvent(eventProperties: EventProperties): udl.Event;
    sendEvent(eventProperties: EventProperties): Promise<boolean>;
    addEvent(eventInfo: udl.EventInfo, attributes: DataLayerAttributes, category?: udl.Category, directCallLabel?: udl.DirectCallLabelEnum): Promise<boolean>;
    addStepLoadTimeEvent(attributes: DataLayerAttributes): Promise<boolean>;
    setCart(cart: udl.Cart): Promise<boolean>;
    getCart(): udl.Cart | null;
    createEventInfo(eventName: string, eventType?: string, messageGroups?: string[]): udl.EventInfo;
    createCart(cartId: string, price?: udl.Price): udl.Cart;
    createTransaction(transactionId: string, price: udl.Price): udl.Transaction;
    setTransaction(transaction: udl.Transaction): Promise<boolean>;
    createPrice(oneTimePrice?: number, recurringPrice?: number, basePrice?: udl.Price, totalPrice?: udl.Price, discountedPrice?: udl.Price): udl.Price;
    createProductInfo(productId: string, productName?: string, productType?: string, productStatus?: string): udl.Product;
    createItem(productInfo: udl.Product, price?: udl.Price, quantity?: number): udl.Item;
    private getStatus;
    private getStatusMessage;
    getAnalyticsPromises(): Promise<boolean>[];
    rollbackStepIdToParent(stepId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataLayerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataLayerService>;
}
//# sourceMappingURL=datalayer.service.d.ts.map