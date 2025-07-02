import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FullWidthDirective } from './full-width.directive';

@Component({
  template: '<i [tgFullWidth]>some content</i>',
})
class TestComponent {
  @Input() iconSize: string;
  @Input() iconType: string;
}

describe('FullWidthDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FullWidthDirective, TestComponent],
    }).createComponent(TestComponent);
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add width--full', () => {
      const classes = checkDirective();
      expect(classes).toContain('width--full');
    });

    function checkDirective() {
      fixture.detectChanges();
      const i: HTMLElement = fixture.nativeElement.querySelector('i');
      const classes = i.classList;
      expect(classes.length).toBe(1);
      return classes;
    }
  });
});
