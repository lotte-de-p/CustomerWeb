import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FontWeightDirective } from './font-weight.directive';

@Component({
  template: '<div [tgFontWeight]="fontWeight">some content</div>',
})
class TestComponent {
  @Input() fontWeight: 'r' | 'm' | 'g' | 'xxl';
}

describe('FontWeightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FontWeightDirective, TestComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add m when font weight is medium', () => {
      component.fontWeight = 'm';
      const classes = checkDirective();
      expect(classes).toContain('text-weight--m');
    });

    it('should add g when font weight is regular', () => {
      component.fontWeight = 'g';
      const classes = checkDirective();
      expect(classes).toContain('text-weight--g');
    });

    it('should not add', () => {
      const classes = checkDirective();
      expect(classes).toHaveLength(0);
    });

    function checkDirective() {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      return div.classList;
    }
  });
});
