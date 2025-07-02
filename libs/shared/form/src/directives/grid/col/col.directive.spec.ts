import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ColDirective } from './col.directive';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

@Component({
  template: '<div tgGridCol [columns]="columns" [breakpoint]="breakpoint">some content</div>',
})
class TestComponent {
  @Input() columns = 12;
  @Input() breakpoint: string;
}

describe('ColDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ColDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add 12 columns as default', () => {
      const classes = checkDirective();
      expect(classes).toContain('col-12');
    });

    it('should add given columns', () => {
      component.columns = 8;
      const classes = checkDirective();
      expect(classes).toContain('col-8');
    });

    it('should add given columns with a certain breakpoint', () => {
      component.columns = 8;
      component.breakpoint = 'md';
      const classes = checkDirective();
      expect(classes).toContain('col-md-8');
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
