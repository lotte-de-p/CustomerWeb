import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FontSizeDirective } from './font-size.directive';

@Component({
  template: '<div [tgFontSize]="$any(size)">some content</div>',
})
class TestComponent {
  @Input() size = 'regular';
}

describe('FontSizeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FontSizeDirective, TestComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add r as default', () => {
      const classes = checkDirective();
      expect(classes).toContain('text--regular');
    });

    it('should add r when regular', () => {
      component.size = 'regular';
      const classes = checkDirective();
      expect(classes).toContain('text--regular');
    });

    it('should add s when small', () => {
      component.size = 'small';
      const classes = checkDirective();
      expect(classes).toContain('text--small');
    });

    it('should add m when medium', () => {
      component.size = 'medium';
      const classes = checkDirective();
      expect(classes).toContain('text--medium');
    });

    it('should not add', () => {
      component.size = '';
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(0);
    });

    function checkDirective() {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(1);
      return classes;
    }
  });
});
