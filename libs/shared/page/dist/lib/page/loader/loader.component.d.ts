import { AfterViewInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { PathCategorisationService } from '../path-categorisation/path-categorisation.service';
import * as i0 from "@angular/core";
export declare class LoaderComponent implements AfterViewInit {
    private readonly loaderService;
    private readonly translate;
    private readonly pathCategorisationService;
    private readonly window;
    pageType: string;
    startByDefault: boolean;
    enableLoader: boolean;
    enableMask: boolean;
    private readonly pageLoaderID;
    private readonly loaderObj;
    private readonly messages;
    constructor(loaderService: LoaderService, translate: TranslateService, pathCategorisationService: PathCategorisationService, window: Window);
    ngAfterViewInit(): void;
    protected showPageLoader(): void;
    private hidePageLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoaderComponent, "app-loader", never, { "pageType": { "alias": "pageType"; "required": false; }; "startByDefault": { "alias": "startByDefault"; "required": false; }; "enableLoader": { "alias": "enableLoader"; "required": false; }; "enableMask": { "alias": "enableMask"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=loader.component.d.ts.map