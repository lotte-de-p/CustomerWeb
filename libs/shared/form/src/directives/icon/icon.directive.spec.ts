import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { IconDirective } from './icon.directive';

@Component({
  template: '<i tgIcon [iconSize]="iconSize" [iconType]="iconType">some content</i>',
})
class TestComponent {
  @Input() iconSize: string;
  @Input() iconType: string;
}

describe('IconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [IconDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should have no classes', () => {
      checkDirective(0);
    });

    it('should add icon-8', () => {
      component.iconSize = '8';
      const classes = checkDirective(1);
      expect(classes).toContain('icon-8');
    });

    it('should add icon-md', () => {
      component.iconType = 'md';
      const classes = checkDirective(1);
      expect(classes).toContain('icon-md');
    });

    it('should add icon-md and icon-8', () => {
      component.iconType = 'md';
      component.iconSize = '8';
      const classes = checkDirective(2);
      expect(classes[0]).toContain('icon-md');
      expect(classes[1]).toContain('icon-8');
    });

    function checkDirective(size: number) {
      fixture.detectChanges();
      const i: HTMLElement = fixture.nativeElement.querySelector('i');
      const classes = i.classList;
      expect(classes.length).toBe(size);
      return classes;
    }
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
