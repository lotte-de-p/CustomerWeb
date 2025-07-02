import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { WhitespaceDirective } from './whitespace.directive';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

@Component({
  template: '<div [tgWhitespace]="whitespaceSize">some content</div>',
})
class TestComponent {
  @Input() whitespaceSize = 'small';
}

describe('WhitespaceDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [WhitespaceDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add a small class as default', () => {
      component.whitespaceSize = 'unknown';
      const classes = checkDirective();
      expect(classes).toContain('whitespace--small');
    });

    it('should add a small class', () => {
      component.whitespaceSize = 'small';
      const classes = checkDirective();
      expect(classes).toContain('whitespace--small');
    });

    it('should add a medium class', () => {
      component.whitespaceSize = 'medium';
      const classes = checkDirective();
      expect(classes).toContain('whitespace--medium');
    });

    it('should add a large class', () => {
      component.whitespaceSize = 'large';
      const classes = checkDirective();
      expect(classes).toContain('whitespace--large');
    });

    it('should add a extra-large class', () => {
      component.whitespaceSize = 'extra-large';
      const classes = checkDirective();
      expect(classes).toContain('whitespace--xlarge');
    });

    function checkDirective() {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain('whitespace');
      return classes;
    }
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
