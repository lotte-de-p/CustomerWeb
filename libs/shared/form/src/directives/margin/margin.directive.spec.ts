import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { MarginDirective, MarginOptions, MarginPosition, MarginSize } from './margin.directive';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

@Component({
  template: '<div [tgMargin]="margin">some content</div>',
})
class TestComponent {
  @Input() margin: MarginOptions | MarginOptions[];
}

describe('MarginDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MarginDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should not add margin when no value is passed', () => {
      const classes = checkDirective();
      expect(classes.length).toBe(0);
    });

    it('should add s when left margin is small and top', () => {
      component.margin = {
        size: MarginSize.small,
        position: MarginPosition.top,
      };
      const classes = checkDirective();
      expect(classes.length).toBe(1);
      expect(classes).toContain('mt--s');
    });

    it('should add s when left margin is medium and top', () => {
      component.margin = {
        size: MarginSize.medium,
        position: MarginPosition.top,
      };
      const classes = checkDirective();
      expect(classes.length).toBe(1);
      expect(classes).toContain('mt--m');
    });

    it('should add multiple margins', () => {
      component.margin = [
        {
          size: MarginSize.medium,
          position: MarginPosition.top,
        },
        {
          size: MarginSize.large,
          position: MarginPosition.bottom,
        },
      ];
      const classes = checkDirective();
      expect(classes.length).toBe(2);
      expect(classes).toContain('mt--m');
      expect(classes).toContain('mb--l');
    });

    function checkDirective() {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      return div.classList;
    }
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
