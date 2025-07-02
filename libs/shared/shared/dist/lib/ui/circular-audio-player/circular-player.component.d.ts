/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */
import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CircularPlayerComponent implements AfterViewInit {
    audio: string;
    radius: number;
    stroke: number;
    innerStroke: number;
    strokeColor: string;
    progressStrokeColor: string;
    innerStrokeColor: string;
    readonly centerX = 50;
    readonly centerY = 50;
    readonly circleRadius = 32;
    audioElement: ElementRef;
    progress: ElementRef;
    playing: boolean;
    toggle(): void;
    get arrowStyle(): {
        'border-top-width': string;
        'border-bottom-width': string;
        'border-left-width': string;
    };
    ngAfterViewInit(): void;
    seek(evnt: MouseEvent): void;
    get pauseLeftBarSize(): {
        width: string;
        height: string;
        left: string;
    };
    get pauseRightBarSize(): {
        width: string;
        height: string;
        left: string;
    };
    get playButtonRadius(): string;
    private _calculateAngle;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularPlayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircularPlayerComponent, "ngx-circular-player", never, { "audio": { "alias": "audio"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=circular-player.component.d.ts.map