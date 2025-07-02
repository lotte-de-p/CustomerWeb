import { TranslateService } from '@ngx-translate/core';
import { MessageService } from '../message.service';
import { AbstractMessage } from '../model';
import { DomService } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
export declare class MessageComponent {
    private readonly messageService;
    private readonly translateService;
    private readonly domService;
    messageGroupName: string;
    private scrollCheck;
    constructor(messageService: MessageService, translateService: TranslateService, domService: DomService);
    getMessages(): AbstractMessage[];
    getTranslatedLabel(message: AbstractMessage): string;
    private scrollToTop;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageComponent, "app-message", never, { "messageGroupName": { "alias": "messageGroupName"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=message.component.d.ts.map