import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularPlayerComponent } from './circular-player.component';
import { ElementRef } from '@angular/core';

describe('CircularPlayerComponent', () => {
  let component: CircularPlayerComponent;
  let fixture: ComponentFixture<CircularPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircularPlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should playing set to true', () => {
    component.playing = false;
    component.audioElement = { nativeElement: { play: jest.fn() } } as ElementRef;
    component.toggle();
    expect(component.playing).toBeTruthy();
    expect(component.audioElement.nativeElement.play).toHaveBeenCalledTimes(1);
  });

  it('should playing set to false', () => {
    component.playing = true;
    component.audioElement = { nativeElement: { pause: jest.fn() } } as ElementRef;
    component.toggle();
    expect(component.audioElement.nativeElement.pause).toHaveBeenCalledTimes(1);
  });

  describe('seek', () => {
    it('should return angle = 180 + (180 - angle)', () => {
      component.audioElement = { nativeElement: { currentTime: 0, duration: 10 } as HTMLAudioElement } as ElementRef;
      component.seek({ offsetX: 5, offsetY: 10 } as MouseEvent);

      expect(component.audioElement.nativeElement.currentTime).toBe(9.021733528661313);
    });

    it('should return angle = 180 + angle', () => {
      component.audioElement = { nativeElement: { currentTime: 0, duration: 10 } as HTMLAudioElement } as ElementRef;
      component.seek({ offsetX: 50, offsetY: 10 } as MouseEvent);

      expect(component.audioElement.nativeElement.currentTime).toBe(5.644405292045783);
    });

    it('should return angle = 180 - angle', () => {
      component.audioElement = { nativeElement: { currentTime: 0, duration: 10 } as HTMLAudioElement } as ElementRef;
      component.seek({ offsetX: 50, offsetY: 50 } as MouseEvent);

      expect(component.audioElement.nativeElement.currentTime).toBe(3.75);
    });

    it('should return angle = angle', () => {
      component.audioElement = { nativeElement: { currentTime: 0, duration: 10 } as HTMLAudioElement } as ElementRef;
      component.seek({ offsetX: 5, offsetY: 50 } as MouseEvent);

      expect(component.audioElement.nativeElement.currentTime).toBe(1.631563008489516);
    });
  });

  describe('pauseLeftBarSize', () => {
    it('should return pauseLeftBarSize css styling', () => {
      expect(component.pauseLeftBarSize).toStrictEqual({
        width: '4.4px',
        height: '12.571428571428571px',
        left: 'calc(50% - 3.6666666666666665px)',
      });
    });
  });

  describe('pauseRightBarSize', () => {
    it('should return pauseRightBarSize css styling', () => {
      expect(component.pauseRightBarSize).toStrictEqual({
        width: '4.4px',
        height: '12.571428571428571px',
        left: 'calc(50% + 3.6666666666666665px)',
      });
    });
  });

  describe('playButtonRadius', () => {
    it('should return playButtonRadius css styling', () => {
      expect(component.playButtonRadius).toStrictEqual('29.333333333333336px');
    });
  });

  describe('circleRadius', () => {
    it('should return circleRadius css styling', () => {
      expect(component.circleRadius).toStrictEqual(32);
    });
  });

  describe('centerY', () => {
    it('should return centerY css styling', () => {
      expect(component.centerY).toStrictEqual(50);
    });
  });

  describe('centerX', () => {
    it('should return centerX css styling', () => {
      expect(component.centerX).toStrictEqual(50);
    });
  });
});
