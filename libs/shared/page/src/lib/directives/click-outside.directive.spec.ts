import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({ template: `<span id="appClickOutside" [appClickOutside]></span>` })
export class TestComponent {}

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ClickOutsideDirective],
      declarations: [TestComponent],
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });

  describe('ClickOutsideDirective.onClick', () => {
    const mouseEvent = new MouseEvent('click');
    let clickOutsideDirective: ClickOutsideDirective;

    it('should not sent an event', function () {
      const htmlElement = fixture.debugElement.nativeElement;
      const elementRef = new ElementRef(htmlElement);
      clickOutsideDirective = new ClickOutsideDirective(elementRef);
      jest.spyOn(clickOutsideDirective.appClickOutside, 'emit');

      clickOutsideDirective.onClick(mouseEvent, undefined);

      expect(clickOutsideDirective.appClickOutside.emit).toHaveBeenCalledTimes(0);
    });

    it('should not emit an event', function () {
      const htmlElement = fixture.debugElement.nativeElement;
      const elementRef = new ElementRef(htmlElement);
      clickOutsideDirective = new ClickOutsideDirective(elementRef);
      jest.spyOn(clickOutsideDirective.appClickOutside, 'emit');

      clickOutsideDirective.onClick(mouseEvent, htmlElement);

      expect(clickOutsideDirective.appClickOutside.emit).toHaveBeenCalledTimes(0);
    });

    it('should emit an event', function () {
      const htmlElement = fixture.debugElement.nativeElement;
      const elementRef = new ElementRef(htmlElement);
      clickOutsideDirective = new ClickOutsideDirective(elementRef);
      jest.spyOn(clickOutsideDirective.appClickOutside, 'emit');

      clickOutsideDirective.onClick(mouseEvent, document.createElement('div'));

      expect(clickOutsideDirective.appClickOutside.emit).toHaveBeenCalledWith(mouseEvent);
    });
  });
});
