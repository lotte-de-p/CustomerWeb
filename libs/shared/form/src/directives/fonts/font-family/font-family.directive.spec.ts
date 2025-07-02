import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { FontFamilyDirective } from './font-family.directive';

@Component({
  template: '<div [tgFontFamily]="$any(family)">some content</div>',
})
class TestComponent {
  @Input() family: string;
}

describe('FontFamilyDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FontFamilyDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add t4 when the font family is for', () => {
      component.family = 't4';
      const classes = checkDirective();
      expect(classes).toContain('text-font-family--t4');
    });

    it('should add t6 when the font family is six', () => {
      component.family = 't6';
      const classes = checkDirective();
      expect(classes).toContain('text-font-family--t6');
    });

    it('should add t8 when the font family is eight', () => {
      component.family = 't8';
      const classes = checkDirective();
      expect(classes).toContain('text-font-family--t8');
    });

    function checkDirective() {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(1);
      return classes;
    }
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
