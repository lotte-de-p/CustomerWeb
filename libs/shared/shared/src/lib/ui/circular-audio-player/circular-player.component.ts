/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */

import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

const RADIUS = 50;

@Component({
  selector: 'ngx-circular-player',
  template: `
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
  `,
  styles: [
    `
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        stroke: #fff;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 0;
      }

      svg path {
        cursor: pointer;
      }

      button {
        position: relative;
      }

      .play {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;
        background: #f7f6f6 !important;
        cursor: pointer;
        transform: translate(-50%, -50%);
        outline: none;
        border: none;
      }

      .arrow {
        transition: all 0.3s;

        width: 0;
        height: 0;

        border-top-color: transparent;
        border-top-style: solid;
        border-bottom-color: transparent;
        border-bottom-style: solid;
        border-left-style: solid;
        border-left-color: #eee;

        margin: auto;
      }

      .play,
      .pause {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      .pause {
        transition: opacity 0.3s;
      }

      /* Center */
      .play,
      .pause,
      .pause .before,
      .pause .after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .pause .before,
      .pause .after {
        content: '';
        background-color: #eee;
        display: inline-block;
        opacity: 1;
      }

      .hidden-arrow {
        border-left-width: 0 !important;
      }

      .hidden {
        opacity: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularPlayerComponent implements AfterViewInit {
  @Input()
  audio!: string;
  radius = 44;
  stroke = 10;
  innerStroke = 0;
  strokeColor = '#ffc421';
  progressStrokeColor = '#fff';
  innerStrokeColor = '#291D18';
  readonly centerX = 50;
  readonly centerY = 50;
  readonly circleRadius = 32;
  @ViewChild('audioElement') audioElement!: ElementRef;
  @ViewChild('progress') progress!: ElementRef;

  playing = false;

  toggle() {
    this.playing = !this.playing;
    if (this.playing) {
      this.audioElement.nativeElement.play();
    } else {
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
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
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

  seek(evnt: MouseEvent) {
    const ratio = this._calculateAngle(evnt) / 360;
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
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

  private _calculateAngle(evnt: MouseEvent) {
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
}
