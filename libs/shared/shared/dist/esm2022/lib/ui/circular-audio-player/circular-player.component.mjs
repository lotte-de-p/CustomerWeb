/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["audioElement"];
const _c1 = ["progress"];
const RADIUS = 50;
export class CircularPlayerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXItcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvdWkvY2lyY3VsYXItYXVkaW8tcGxheWVyL2NpcmN1bGFyLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFaEgsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBaUpsQixNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLEtBQUssQ0FBVTtJQUNmLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDWixNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNoQixXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLG1CQUFtQixHQUFHLE1BQU0sQ0FBQztJQUM3QixnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEIsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDYixZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ0EsWUFBWSxDQUFjO0lBQzlCLFFBQVEsQ0FBYztJQUU3QyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRWhCLE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osTUFBTSxRQUFR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O1lBRTNELGlCQUFPLEVBQUE7WUFFVCxtQkFLeUI7WUFMekIsOEJBS3lCO1lBQ3ZCLDRCQU1zQztZQUV0QywrQkFXaUM7WUFWL0IsNkdBQVMsZ0JBQVksSUFBQztZQUR4QixpQkFXaUM7WUFFakMsNkJBU2lDO1lBQ25DLGlCQUFNO1lBRU4sb0JBQW9DO1lBQXBDLHNDQUFvQztZQUNsQyw4QkFBeUM7WUFDM0MsaUJBQVE7O1lBaERhLDZDQUFnQyxnQ0FBQTtZQUM5QyxjQUE4QjtZQUE5QiwyQ0FBOEI7WUFBQyx3Q0FBc0I7WUFDcEQsY0FBeUI7WUFBekIsc0NBQXlCO1lBQ1IsY0FBNEI7WUFBNUIsOENBQTRCO1lBQzdCLGNBQTZCO1lBQTdCLCtDQUE2QjtZQVFuRCxjQUFzQjtZQUF0QixtQ0FBc0I7WUFFcEIsY0FBbUI7WUFBbkIsaUNBQW1CLG1CQUFBLHVCQUFBLGdDQUFBLGlDQUFBO1lBaUJuQixjQUFtQztZQUFuQyxpREFBbUMsNEJBQUE7WUFTbkMsY0FBNkI7WUFBN0IsdUNBQTZCLDJCQUFBLDRCQUFBO1lBT04sZUFBYTtZQUFiLGlEQUFhOzs7aUZBNkYvQix1QkFBdUI7Y0EvSW5DLFNBQVM7MkJBQ0UscUJBQXFCLFlBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtEVCxtQkF5RmdCLHVCQUF1QixDQUFDLE1BQU07Z0JBSS9DLEtBQUs7a0JBREosS0FBSztZQVdxQixZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWM7WUFDRixRQUFRO2tCQUE5QixTQUFTO21CQUFDLFVBQVU7O2tGQWJWLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBwb3J0ZWQgYmVjYXVzZSB0aGVyZSBpcyBubyBzdXBwb3J0IGZvciBhbmd1bGFyIDE1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9uZ3gtY2lyY3VsYXItcGxheWVyXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBSQURJVVMgPSA1MDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNpcmN1bGFyLXBsYXllcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBsYXlcIiBbc3R5bGUud2lkdGhdPVwicGxheUJ1dHRvblJhZGl1c1wiIFtzdHlsZS5oZWlnaHRdPVwicGxheUJ1dHRvblJhZGl1c1wiIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICAgICAgPGRpdiBbY2xhc3MuaGlkZGVuLWFycm93XT1cInBsYXlpbmdcIiBbbmdTdHlsZV09XCJhcnJvd1N0eWxlXCIgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PlxuICAgICAgPHNwYW4gW2NsYXNzLmhpZGRlbl09XCIhcGxheWluZ1wiIGNsYXNzPVwicGF1c2VcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWZvcmVcIiBbbmdTdHlsZV09XCJwYXVzZUxlZnRCYXJTaXplXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFmdGVyXCIgW25nU3R5bGVdPVwicGF1c2VSaWdodEJhclNpemVcIj48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPHN2Z1xuICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cInJhZGl1c1wiPlxuICAgICAgPGNpcmNsZVxuICAgICAgICBbYXR0ci5jeF09XCJjZW50ZXJYXCJcbiAgICAgICAgW2F0dHIuY3ldPVwiY2VudGVyWVwiXG4gICAgICAgIFthdHRyLnJdPVwiY2lyY2xlUmFkaXVzXCJcbiAgICAgICAgW2F0dHIuc3Ryb2tlXT1cImlubmVyU3Ryb2tlQ29sb3JcIlxuICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwiaW5uZXJTdHJva2VcIiAvPlxuXG4gICAgICA8cGF0aFxuICAgICAgICAoY2xpY2spPVwic2VlaygkZXZlbnQpXCJcbiAgICAgICAgcG9pbnRlci1ldmVudHM9XCJzdHJva2VcIlxuICAgICAgICBkPVwiTSA1MCA1MFxuICAgICAgIG0gLTUwLCAwXG4gICAgICAgYSA1MCw1MCAwIDEsMCAxMDAsMFxuICAgICAgIGEgNTAsNTAgMCAxLDAgLTEwMCwwXCJcbiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiXG4gICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCJcbiAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgW2F0dHIuc3Ryb2tlXT1cInByb2dyZXNzU3Ryb2tlQ29sb3JcIlxuICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlXCIgLz5cblxuICAgICAgPHBhdGhcbiAgICAgICAgI3Byb2dyZXNzXG4gICAgICAgIGQ9XCJNIDUwIDUwXG4gICAgICAgbSAtNTAsIDBcbiAgICAgICBhIDUwLDUwIDAgMSwwIDEwMCwwXG4gICAgICAgYSA1MCw1MCAwIDEsMCAtMTAwLDBcIlxuICAgICAgICBbYXR0ci5zdHJva2UtbWl0ZXJsaW1pdF09XCIxMFwiXG4gICAgICAgIFthdHRyLnN0cm9rZV09XCJzdHJva2VDb2xvclwiXG4gICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJzdHJva2VcIiAvPlxuICAgIDwvc3ZnPlxuXG4gICAgPGF1ZGlvIHByZWxvYWQ9XCJhdXRvXCIgI2F1ZGlvRWxlbWVudD5cbiAgICAgIDxzb3VyY2UgdHlwZT1cImF1ZGlvL21wM1wiIFtzcmNdPVwiYXVkaW9cIiAvPlxuICAgIDwvYXVkaW8+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgc3Ryb2tlOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIHN2ZyBwYXRoIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5wbGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmNmY2ICFpbXBvcnRhbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmFycm93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcblxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2VlZTtcblxuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5wbGF5LFxuICAgICAgLnBhdXNlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuXG4gICAgICAucGF1c2Uge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC8qIENlbnRlciAqL1xuICAgICAgLnBsYXksXG4gICAgICAucGF1c2UsXG4gICAgICAucGF1c2UgLmJlZm9yZSxcbiAgICAgIC5wYXVzZSAuYWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAucGF1c2UgLmJlZm9yZSxcbiAgICAgIC5wYXVzZSAuYWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuLWFycm93IHtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmhpZGRlbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENpcmN1bGFyUGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGF1ZGlvITogc3RyaW5nO1xuICByYWRpdXMgPSA0NDtcbiAgc3Ryb2tlID0gMTA7XG4gIGlubmVyU3Ryb2tlID0gMDtcbiAgc3Ryb2tlQ29sb3IgPSAnI2ZmYzQyMSc7XG4gIHByb2dyZXNzU3Ryb2tlQ29sb3IgPSAnI2ZmZic7XG4gIGlubmVyU3Ryb2tlQ29sb3IgPSAnIzI5MUQxOCc7XG4gIHJlYWRvbmx5IGNlbnRlclggPSA1MDtcbiAgcmVhZG9ubHkgY2VudGVyWSA9IDUwO1xuICByZWFkb25seSBjaXJjbGVSYWRpdXMgPSAzMjtcbiAgQFZpZXdDaGlsZCgnYXVkaW9FbGVtZW50JykgYXVkaW9FbGVtZW50ITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnKSBwcm9ncmVzcyE6IEVsZW1lbnRSZWY7XG5cbiAgcGxheWluZyA9IGZhbHNlO1xuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMuYXVkaW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1ZGlvRWxlbWVudC5uYXRpdmVFbGVtZW50LnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFycm93U3R5bGUoKSB7XG4gICAgY29uc3QgdG9wV2lkdGggPSB0aGlzLnJhZGl1cyAvIDg7XG4gICAgY29uc3QgYm90dG9tV2lkdGggPSB0aGlzLnJhZGl1cyAvIDg7XG4gICAgY29uc3QgbGVmdFdpZHRoID0gdGhpcy5yYWRpdXMgLyA1O1xuICAgIHJldHVybiB7XG4gICAgICAnYm9yZGVyLXRvcC13aWR0aCc6IGAke3RvcFdpZHRofXB4YCxcbiAgICAgICdib3JkZXItYm90dG9tLXdpZHRoJzogYCR7Ym90dG9tV2lkdGh9cHhgLFxuICAgICAgJ2JvcmRlci1sZWZ0LXdpZHRoJzogYCR7bGVmdFdpZHRofXB4YCxcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5wcm9ncmVzcy5uYXRpdmVFbGVtZW50O1xuICAgIC8vIER1cmluZyBTU1Igd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZyBzcGVjaWFsIGhlcmUuXG4gICAgaWYgKCFwcm9ncmVzcyB8fCB0eXBlb2YgcHJvZ3Jlc3MuZ2V0VG90YWxMZW5ndGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG90YWxMZW5ndGggPSBwcm9ncmVzcy5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5hdWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIHByb2dyZXNzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHRvdGFsTGVuZ3RoKTtcbiAgICBwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgdG90YWxMZW5ndGgpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgKCkgPT4gKHRoaXMucGxheWluZyA9IGZhbHNlKSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsICgpID0+ICh0aGlzLnBsYXlpbmcgPSB0cnVlKSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gYXVkaW8uY3VycmVudFRpbWU7XG4gICAgICBjb25zdCBtYXhkdXJhdGlvbiA9IGF1ZGlvLmR1cmF0aW9uO1xuICAgICAgY29uc3QgY2FsYyA9IHRvdGFsTGVuZ3RoIC0gKGN1cnJlbnRUaW1lIC8gbWF4ZHVyYXRpb24pICogdG90YWxMZW5ndGg7XG5cbiAgICAgIHByb2dyZXNzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCBjYWxjKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlZWsoZXZudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHJhdGlvID0gdGhpcy5fY2FsY3VsYXRlQW5nbGUoZXZudCkgLyAzNjA7XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLmF1ZGlvRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxBdWRpb0VsZW1lbnQ7XG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSByYXRpbyAqIGF1ZGlvLmR1cmF0aW9uO1xuICB9XG5cbiAgZ2V0IHBhdXNlTGVmdEJhclNpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBgJHt0aGlzLnJhZGl1cyAvIDEwfXB4YCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5yYWRpdXMgLyAzLjV9cHhgLFxuICAgICAgbGVmdDogYGNhbGMoNTAlIC0gJHt0aGlzLnJhZGl1cyAvIDEyfXB4KWAsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBwYXVzZVJpZ2h0QmFyU2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGAke3RoaXMucmFkaXVzIC8gMTB9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLnJhZGl1cyAvIDMuNX1weGAsXG4gICAgICBsZWZ0OiBgY2FsYyg1MCUgKyAke3RoaXMucmFkaXVzIC8gMTJ9cHgpYCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHBsYXlCdXR0b25SYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzIC0gdGhpcy5yYWRpdXMgLyAzICsgJ3B4JztcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZUFuZ2xlKGV2bnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCB4ID0gKFJBRElVUyAqIDIpIC8gKHRoaXMucmFkaXVzIC8gZXZudC5vZmZzZXRYKTtcbiAgICBjb25zdCB5ID0gKFJBRElVUyAqIDIpIC8gKHRoaXMucmFkaXVzIC8gZXZudC5vZmZzZXRZKTtcbiAgICBjb25zdCBzbG9wZSA9IChSQURJVVMgLSB5KSAvIChSQURJVVMgLSB4KTtcbiAgICBjb25zdCBhbmdsZSA9IDE4MCAqIChNYXRoLmFicyhNYXRoLmF0YW4oc2xvcGUpKSAvIE1hdGguUEkpO1xuXG4gICAgaWYgKHggPD0gUkFESVVTICYmIHkgPj0gUkFESVVTKSB7XG4gICAgICByZXR1cm4gYW5nbGU7XG4gICAgfVxuICAgIGlmICh4ID4gUkFESVVTICYmIHkgPj0gUkFESVVTKSB7XG4gICAgICByZXR1cm4gMTgwIC0gYW5nbGU7XG4gICAgfVxuICAgIGlmICh4ID4gUkFESVVTICYmIHkgPD0gUkFESVVTKSB7XG4gICAgICByZXR1cm4gMTgwICsgYW5nbGU7XG4gICAgfVxuICAgIHJldHVybiAxODAgKyAoMTgwIC0gYW5nbGUpO1xuICB9XG59XG4iXX0=