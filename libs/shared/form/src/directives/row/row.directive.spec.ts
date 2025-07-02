import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { RowDirective } from './row.directive';

@Component({
  template: '<div tgGridRow [fullGutters]="fullGutters">some content</div>',
})
class TestComponent {
  @Input() fullGutters: boolean;
}

describe('RowDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [RowDirective, TestComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add a row class', () => {
      const classes = checkDirective();
      expect(classes).toContain('row');
    });

    it('should add row full gutters class', () => {
      component.fullGutters = true;
      const classes = checkDirective();
      expect(classes).toContain('row--full-gutters');
    });

    function checkDirective() {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      return div.classList;
    }
  });
});
