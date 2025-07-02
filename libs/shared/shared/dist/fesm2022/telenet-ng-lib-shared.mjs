import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, Input, ViewChild, NgModule, EventEmitter, Output, Inject, Pipe } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateService, TranslateStore, TranslateFakeLoader, TranslateFakeCompiler, TranslateDefaultParser, FakeMissingTranslationHandler } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { merge, pick } from 'lodash-es';
import { bindCallback, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

class WindowService {
    paramMap = new Map();
    constructor() {
        this.init();
    }
    getParamValue(key) {
        return this.paramMap.get(key);
    }
    getParamMap() {
        return this.paramMap;
    }
    goTo(params) {
        const url = [];
        params.forEach((_value, _key) => {
            if (!!_key && !!_value) {
                url.push(_key + '=' + _value);
            }
        });
        window.location.search = '?' + url.join('&');
    }
    hasParam(key) {
        return this.paramMap.get(key) !== undefined;
    }
    init() {
        const search = window.location.search.substring(1);
        search.split('&').forEach((comb) => {
            const keyValue = comb.split('=');
            this.paramMap.set(keyValue[0], keyValue[1]);
        });
    }
    setWindowObjects(object, value) {
        window[object] = value;
    }
    static ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WindowService, factory: WindowService.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WindowService, [{
        type: Injectable
    }], () => [], null); })();

class LogFactory {
    static createLogger(component) {
        return new LogImpl(component);
    }
}
class LogImpl {
    windowService = new WindowService();
    component;
    constructor(component) {
        if (component) {
            this.component = component;
        }
    }
    log(...args) {
        if (this.component) {
            console.log(this.componentToString(args));
        }
        else {
            console.log(args);
        }
    }
    logDebug(...args) {
        if (this.isDebugEnabled()) {
            if (this.component) {
                console.debug(this.componentToString(args));
            }
            else {
                console.debug(args);
            }
        }
    }
    logError(...args) {
        if (this.component) {
            console.error(this.componentToString(args));
        }
        else {
            console.error(args);
        }
    }
    logInfo(...args) {
        if (this.component) {
            console.info(this.componentToString(args));
        }
        else {
            console.info(args);
        }
    }
    isDebugEnabled() {
        return this.windowService && this.windowService.getParamValue('debug') === 'true';
    }
    componentToString(args) {
        return [`${this.component.prototype.constructor.name}`, ...args];
    }
}

class DomService {
    findElementById(id) {
        return document.getElementById(id);
    }
    appendScript(src, id, onLoadCallback) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id || '';
        script.onload = onLoadCallback || null;
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    }
    scrollToElement(selector, delay) {
        setTimeout(() => {
            const elementToScroll = document.querySelector(selector);
            if (elementToScroll) {
                elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, delay);
    }
    scrollToStartElement(selector, delay) {
        setTimeout(() => {
            const elementToScrollAtStart = document.querySelector(selector);
            if (elementToScrollAtStart) {
                elementToScrollAtStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, delay);
    }
    scrollToTop() {
        setTimeout(() => {
            const elementToScroll = document.querySelector('#app');
            if (elementToScroll) {
                elementToScroll.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    getDomElement(selector) {
        return document.querySelector(selector);
    }
    toggleBodyOverflow(isBodyScrollable) {
        const domElement = this.getDomElement('body');
        if (domElement) {
            domElement.style.overflow = isBodyScrollable ? 'hidden' : '';
        }
    }
    scrollElementToTop(selector) {
        const domElement = this.getDomElement(selector);
        if (domElement) {
            domElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }
    scrollIntoViewBasedOnId(id) {
        const elementToScroll = document.getElementById(id);
        elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    static ɵfac = function DomService_Factory(t) { return new (t || DomService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DomService, factory: DomService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */
const _c0 = ["audioElement"];
const _c1 = ["progress"];
const RADIUS = 50;
class CircularPlayerComponent {
    audio;
    radius = 44;
    stroke = 10;
    innerStroke = 0;
    strokeColor = '#ffc421';
    progressStrokeColor = '#fff';
    innerStrokeColor = '#291D18';
    centerX = 50;
    centerY = 50;
    circleRadius = 32;
    audioElement;
    progress;
    playing = false;
    toggle() {
        this.playing = !this.playing;
        if (this.playing) {
            this.audioElement.nativeElement.play();
        }
        else {
            this.audioElement.nativeElement.pause();
        }
    }
    get arrowStyle() {
        const topWidth = this.radius / 8;
        const bottomWidth = this.radius / 8;
        const leftWidth = this.radius / 5;
        return {
            'border-top-width': `${topWidth}px`,
            'border-bottom-width': `${bottomWidth}px`,
            'border-left-width': `${leftWidth}px`,
        };
    }
    ngAfterViewInit() {
        const progress = this.progress.nativeElement;
        // During SSR we don't need to do anything special here.
        if (!progress || typeof progress.getTotalLength !== 'function') {
            return;
        }
        const totalLength = progress.getTotalLength();
        const audio = this.audioElement.nativeElement;
        progress.setAttribute('stroke-dasharray', totalLength);
        progress.setAttribute('stroke-dashoffset', totalLength);
        audio.addEventListener('pause', () => (this.playing = false));
        audio.addEventListener('play', () => (this.playing = true));
        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            const maxduration = audio.duration;
            const calc = totalLength - (currentTime / maxduration) * totalLength;
            progress.setAttribute('stroke-dashoffset', calc);
        });
    }
    seek(evnt) {
        const ratio = this._calculateAngle(evnt) / 360;
        const audio = this.audioElement.nativeElement;
        audio.currentTime = ratio * audio.duration;
    }
    get pauseLeftBarSize() {
        return {
            width: `${this.radius / 10}px`,
            height: `${this.radius / 3.5}px`,
            left: `calc(50% - ${this.radius / 12}px)`,
        };
    }
    get pauseRightBarSize() {
        return {
            width: `${this.radius / 10}px`,
            height: `${this.radius / 3.5}px`,
            left: `calc(50% + ${this.radius / 12}px)`,
        };
    }
    get playButtonRadius() {
        return this.radius - this.radius / 3 + 'px';
    }
    _calculateAngle(evnt) {
        const x = (RADIUS * 2) / (this.radius / evnt.offsetX);
        const y = (RADIUS * 2) / (this.radius / evnt.offsetY);
        const slope = (RADIUS - y) / (RADIUS - x);
        const angle = 180 * (Math.abs(Math.atan(slope)) / Math.PI);
        if (x <= RADIUS && y >= RADIUS) {
            return angle;
        }
        if (x > RADIUS && y >= RADIUS) {
            return 180 - angle;
        }
        if (x > RADIUS && y <= RADIUS) {
            return 180 + angle;
        }
        return 180 + (180 - angle);
    }
    static ɵfac = function CircularPlayerComponent_Factory(t) { return new (t || CircularPlayerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CircularPlayerComponent, selectors: [["ngx-circular-player"]], viewQuery: function CircularPlayerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.audioElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.progress = _t.first);
        } }, inputs: { audio: "audio" }, decls: 13, vars: 24, consts: [[1, "play", 3, "click"], [1, "arrow", 3, "ngStyle"], [1, "pause"], [1, "before", 3, "ngStyle"], [1, "after", 3, "ngStyle"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100"], ["fill", "transparent"], ["pointer-events", "stroke", "d", "M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0", "stroke-miterlimit", "10", "fill", "transparent", 2, "cursor", "pointer", 3, "click"], ["d", "M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0", "fill", "transparent"], ["progress", ""], ["preload", "auto"], ["audioElement", ""], ["type", "audio/mp3", 3, "src"]], template: function CircularPlayerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CircularPlayerComponent_Template_button_click_0_listener() { return ctx.toggle(); });
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵelement(3, "span", 3)(4, "span", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵelement(6, "circle", 6);
            i0.ɵɵelementStart(7, "path", 7);
            i0.ɵɵlistener("click", function CircularPlayerComponent_Template__svg_path_click_7_listener($event) { return ctx.seek($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "path", 8, 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(10, "audio", 10, 11);
            i0.ɵɵelement(12, "source", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.playButtonRadius)("height", ctx.playButtonRadius);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("hidden-arrow", ctx.playing);
            i0.ɵɵproperty("ngStyle", ctx.arrowStyle);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("hidden", !ctx.playing);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", ctx.pauseLeftBarSize);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", ctx.pauseRightBarSize);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("width", ctx.radius);
            i0.ɵɵadvance();
            i0.ɵɵattribute("cx", ctx.centerX)("cy", ctx.centerY)("r", ctx.circleRadius)("stroke", ctx.innerStrokeColor)("stroke-width", ctx.innerStroke);
            i0.ɵɵadvance();
            i0.ɵɵattribute("stroke", ctx.progressStrokeColor)("stroke-width", ctx.stroke);
            i0.ɵɵadvance();
            i0.ɵɵattribute("stroke-miterlimit", 10)("stroke", ctx.strokeColor)("stroke-width", ctx.stroke);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.audio, i0.ɵɵsanitizeUrl);
        } }, dependencies: [i1.NgStyle], styles: ["svg[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;stroke:#fff;border-radius:100%;transform:translate(-50%,-50%);pointer-events:none;z-index:0}svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%]{position:relative}.play[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;z-index:3;background:#f7f6f6!important;cursor:pointer;transform:translate(-50%,-50%);outline:none;border:none}.arrow[_ngcontent-%COMP%]{transition:all .3s;width:0;height:0;border-top-color:transparent;border-top-style:solid;border-bottom-color:transparent;border-bottom-style:solid;border-left-style:solid;border-left-color:#eee;margin:auto}.play[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.pause[_ngcontent-%COMP%]{transition:opacity .3s}.play[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%]{content:\"\";background-color:#eee;display:inline-block;opacity:1}.hidden-arrow[_ngcontent-%COMP%]{border-left-width:0!important}.hidden[_ngcontent-%COMP%]{opacity:0}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CircularPlayerComponent, [{
        type: Component,
        args: [{ selector: 'ngx-circular-player', template: `
    <button class="play" [style.width]="playButtonRadius" [style.height]="playButtonRadius" (click)="toggle()">
      <div [class.hidden-arrow]="playing" [ngStyle]="arrowStyle" class="arrow"></div>
      <span [class.hidden]="!playing" class="pause">
        <span class="before" [ngStyle]="pauseLeftBarSize"></span>
        <span class="after" [ngStyle]="pauseRightBarSize"></span>
      </span>
    </button>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      [style.width]="radius">
      <circle
        [attr.cx]="centerX"
        [attr.cy]="centerY"
        [attr.r]="circleRadius"
        [attr.stroke]="innerStrokeColor"
        fill="transparent"
        [attr.stroke-width]="innerStroke" />

      <path
        (click)="seek($event)"
        pointer-events="stroke"
        d="M 50 50
       m -50, 0
       a 50,50 0 1,0 100,0
       a 50,50 0 1,0 -100,0"
        stroke-miterlimit="10"
        style="cursor: pointer"
        fill="transparent"
        [attr.stroke]="progressStrokeColor"
        [attr.stroke-width]="stroke" />

      <path
        #progress
        d="M 50 50
       m -50, 0
       a 50,50 0 1,0 100,0
       a 50,50 0 1,0 -100,0"
        [attr.stroke-miterlimit]="10"
        [attr.stroke]="strokeColor"
        fill="transparent"
        [attr.stroke-width]="stroke" />
    </svg>

    <audio preload="auto" #audioElement>
      <source type="audio/mp3" [src]="audio" />
    </audio>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["svg{position:absolute;top:50%;left:50%;stroke:#fff;border-radius:100%;transform:translate(-50%,-50%);pointer-events:none;z-index:0}svg path{cursor:pointer}button{position:relative}.play{position:absolute;top:50%;left:50%;z-index:3;background:#f7f6f6!important;cursor:pointer;transform:translate(-50%,-50%);outline:none;border:none}.arrow{transition:all .3s;width:0;height:0;border-top-color:transparent;border-top-style:solid;border-bottom-color:transparent;border-bottom-style:solid;border-left-style:solid;border-left-color:#eee;margin:auto}.play,.pause{width:100%;height:100%;border-radius:50%}.pause{transition:opacity .3s}.play,.pause,.pause .before,.pause .after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pause .before,.pause .after{content:\"\";background-color:#eee;display:inline-block;opacity:1}.hidden-arrow{border-left-width:0!important}.hidden{opacity:0}\n"] }]
    }], null, { audio: [{
            type: Input
        }], audioElement: [{
            type: ViewChild,
            args: ['audioElement']
        }], progress: [{
            type: ViewChild,
            args: ['progress']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CircularPlayerComponent, { className: "CircularPlayerComponent" }); })();

/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */
class CircularPlayerModule {
    static ɵfac = function CircularPlayerModule_Factory(t) { return new (t || CircularPlayerModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CircularPlayerModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CircularPlayerModule, [{
        type: NgModule,
        args: [{
                declarations: [CircularPlayerComponent],
                imports: [CommonModule],
                exports: [CircularPlayerComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CircularPlayerModule, { declarations: [CircularPlayerComponent], imports: [CommonModule], exports: [CircularPlayerComponent] }); })();

class SharedToolModule {
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

function cleanStylesFromDom() {
    const MAX_STYLE_TAGS = 20;
    const head = document.getElementsByTagName('head')[0];
    const styles = head && head.getElementsByTagName('style');
    if (styles && styles.length >= MAX_STYLE_TAGS) {
        for (const style of Array.from(styles)) {
            head.removeChild(style);
        }
    }
}

class MockTranslateService extends TranslateService {
    constructor() {
        super(new TranslateStore(), new TranslateFakeLoader(), new TranslateFakeCompiler(), new TranslateDefaultParser(), new FakeMissingTranslationHandler(), false, false, false, 'en');
    }
    instant(key) {
        return key;
    }
}

function Builder(typeOrTemplate, template) {
    let type;
    if (typeOrTemplate instanceof Function) {
        type = typeOrTemplate;
    }
    else {
        template = typeOrTemplate;
    }
    const built = template ? Object.assign({}, template) : {};
    const builder = new Proxy({}, {
        get(_target, prop) {
            if ('build' === prop) {
                if (type) {
                    // A class name (identified by the constructor) was passed. Instantiate it with props.
                    const obj = new type();
                    return () => Object.assign(obj, { ...built });
                }
                else {
                    // No type information - just return the object.
                    return () => built;
                }
            }
            return (x) => {
                built[prop.toString()] = x;
                return builder;
            };
        },
    });
    return builder;
}

function OverlayPopupComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵlistener("click", function OverlayPopupComponent_Conditional_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.closeButtonClicked.emit()); });
    i0.ɵɵelementEnd()();
} }
function OverlayPopupComponent_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function OverlayPopupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.subtitle);
} }
function OverlayPopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.content);
} }
function OverlayPopupComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵlistener("click", function OverlayPopupComponent_a_11_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.secondaryButtonClicked.emit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.secondaryButtonText);
} }
function OverlayPopupComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵlistener("click", function OverlayPopupComponent_a_12_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.primaryButtonClicked.emit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.primaryButtonText);
} }
class OverlayPopupComponent {
    title = '';
    subtitle = '';
    content = '';
    enableClose = true;
    primaryButtonText = '';
    secondaryButtonText = '';
    primaryButtonClicked = new EventEmitter();
    secondaryButtonClicked = new EventEmitter();
    closeButtonClicked = new EventEmitter();
    static ɵfac = function OverlayPopupComponent_Factory(t) { return new (t || OverlayPopupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayPopupComponent, selectors: [["app-overlay-popup"]], inputs: { title: "title", subtitle: "subtitle", content: "content", enableClose: "enableClose", primaryButtonText: "primaryButtonText", secondaryButtonText: "secondaryButtonText" }, outputs: { primaryButtonClicked: "primaryButtonClicked", secondaryButtonClicked: "secondaryButtonClicked", closeButtonClicked: "closeButtonClicked" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 6, consts: [[1, "overlay"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content", "p--m", "p--l--md", "animation--slide-down-to-screen"], ["class", "overlay__section__content__close"], [1, "text-align--left"], ["class", "heading--notopmargin overlay__section__content__title", 4, "ngIf"], ["class", "overlay__section__content__sub-title", 4, "ngIf"], [1, "mt--xs"], ["class", "overlay__section__content__description", 4, "ngIf"], [1, "overlay__section__content__action"], ["class", "button button--secondary", 3, "click", 4, "ngIf"], ["class", "button button--primary", 3, "click", 4, "ngIf"], [1, "overlay__section__content__close"], [1, "icon", "icon-cross", 3, "click"], [1, "heading--notopmargin", "overlay__section__content__title"], [1, "overlay__section__content__sub-title"], [1, "overlay__section__content__description"], [1, "button", "button--secondary", 3, "click"], [1, "button", "button--primary", 3, "click"]], template: function OverlayPopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵtemplate(4, OverlayPopupComponent_Conditional_4_Template, 2, 0, "div", 4);
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵtemplate(6, OverlayPopupComponent_h5_6_Template, 2, 1, "h5", 6)(7, OverlayPopupComponent_div_7_Template, 2, 1, "div", 7);
            i0.ɵɵelementStart(8, "div", 8);
            i0.ɵɵtemplate(9, OverlayPopupComponent_div_9_Template, 2, 1, "div", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 10);
            i0.ɵɵtemplate(11, OverlayPopupComponent_a_11_Template, 2, 1, "a", 11)(12, OverlayPopupComponent_a_12_Template, 2, 1, "a", 12);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(4, ctx.enableClose ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.content);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.secondaryButtonText);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.primaryButtonText);
        } }, dependencies: [NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayPopupComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'app-overlay-popup', imports: [NgIf], template: "<div class=\"overlay\">\n  <div class=\"overlay__mask\"></div>\n  <div class=\"overlay__section\">\n    <div class=\"overlay__section__content p--m p--l--md animation--slide-down-to-screen\">\n      @if (enableClose) {\n        <div class=\"overlay__section__content__close\">\n          <div class=\"icon icon-cross\" (click)=\"this.closeButtonClicked.emit()\"></div>\n        </div>\n      }\n      <div class=\"text-align--left\">\n        <h5 *ngIf=\"title\" class=\"heading--notopmargin overlay__section__content__title\">{{ title }}</h5>\n        <div *ngIf=\"subtitle\" class=\"overlay__section__content__sub-title\">{{ subtitle }}</div>\n        <div class=\"mt--xs\">\n          <div *ngIf=\"content\" class=\"overlay__section__content__description\">{{ content }}</div>\n        </div>\n      </div>\n      <div class=\"overlay__section__content__action\">\n        <a *ngIf=\"secondaryButtonText\" (click)=\"this.secondaryButtonClicked.emit()\" class=\"button button--secondary\">{{\n          secondaryButtonText\n        }}</a>\n        <a *ngIf=\"primaryButtonText\" (click)=\"this.primaryButtonClicked.emit()\" class=\"button button--primary\">{{\n          primaryButtonText\n        }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], content: [{
            type: Input
        }], enableClose: [{
            type: Input
        }], primaryButtonText: [{
            type: Input
        }], secondaryButtonText: [{
            type: Input
        }], primaryButtonClicked: [{
            type: Output
        }], secondaryButtonClicked: [{
            type: Output
        }], closeButtonClicked: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OverlayPopupComponent, { className: "OverlayPopupComponent" }); })();

class TgTelenetTestingModule {
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

function setSavedState(state, localStorageKey) {
    sessionStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey) {
    const item = sessionStorage.getItem(localStorageKey);
    if (item) {
        return JSON.parse(item);
    }
    return {};
}
function createStorageMetaReducer(storageKey, stateKeys) {
    return function storageMetaReducer(reducer) {
        let onInit = true; // after load/refresh…
        return function (state, action) {
            // reduce the nextState.
            const nextState = reducer(state, action);
            // init the application state.
            if (onInit) {
                onInit = false;
                const savedState = getSavedState(storageKey);
                return merge(nextState, savedState);
            }
            // save the next state to the application storage.
            const stateToSave = pick(nextState, stateKeys);
            setSavedState(stateToSave, storageKey);
            return nextState;
        };
    };
}

const isDefined = (value) => value !== null && value !== undefined;

function OnChange(callback) {
    const cachedValueKey = Symbol();
    const isFirstChangeKey = Symbol();
    return (target, key) => {
        // Retrieve the callback function either by string reference or direct function
        const callBackFn = typeof callback === 'string' ? target[callback] : callback;
        // Check if the callback function exists
        if (!callBackFn || typeof callBackFn !== 'function') {
            throw new Error(`Cannot find method ${callback} in class ${target.constructor.name}`);
        }
        Object.defineProperty(target, key, {
            set(value) {
                const isFirstChange = this[isFirstChangeKey] === undefined;
                if (isFirstChange)
                    this[isFirstChangeKey] = true;
                if (!isFirstChange && this[cachedValueKey] === value)
                    return;
                const oldValue = this[cachedValueKey];
                this[cachedValueKey] = value;
                callBackFn.call(this, value, {
                    firstChange: isFirstChange,
                    previousValue: oldValue,
                    currentValue: value,
                    isFirstChange: () => isFirstChange,
                });
                this[isFirstChangeKey] = false;
            },
            get() {
                return this[cachedValueKey];
            },
        });
    };
}

class RecaptchaService {
    window;
    constructor(window) {
        this.window = window;
    }
    getRecaptchaToken(action, siteKey) {
        const recaptchaReadyAsObservable = bindCallback((callback) => this.getRecaptcha().ready(callback));
        return recaptchaReadyAsObservable().pipe(mergeMap(() => from(this.executeRecaptcha(action, siteKey))));
    }
    getRecaptcha() {
        return this.window['grecaptcha'];
    }
    executeRecaptcha(action, siteKey) {
        return this.getRecaptcha().execute(siteKey, { action: action });
    }
    static ɵfac = function RecaptchaService_Factory(t) { return new (t || RecaptchaService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecaptchaService, factory: RecaptchaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecaptchaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

class MapFunctionPipe {
    transform(value, functionToMap) {
        return functionToMap(value);
    }
    static ɵfac = function MapFunctionPipe_Factory(t) { return new (t || MapFunctionPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "mapTo", type: MapFunctionPipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapFunctionPipe, [{
        type: Pipe,
        args: [{
                name: 'mapTo',
                standalone: true,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Builder, CircularPlayerComponent, CircularPlayerModule, DomService, LogFactory, MapFunctionPipe, MockTranslateService, OnChange, OverlayPopupComponent, RecaptchaService, SharedToolModule, TgTelenetTestingModule, WindowService, cleanStylesFromDom, createStorageMetaReducer, isDefined };
//# sourceMappingURL=telenet-ng-lib-shared.mjs.map
