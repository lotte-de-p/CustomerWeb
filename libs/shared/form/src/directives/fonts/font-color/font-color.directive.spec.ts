import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FontColor, FontColorDirective } from './font-color.directive';

@Component({
  template: '<div [tgFontColor]="color">some content</div>',
})
class TestComponent {
  @Input() color: FontColor | string;
}

describe('FontColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FontColorDirective, TestComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add color-brand-2e when the font color is brand-2e', () => {
      component.color = FontColor['brand-2e'];
      const classes = checkDirective();
      expect(classes).toContain('color-brand-2e');
    });

    it('should add color-brand-1e when the font color is brand-1e', () => {
      component.color = FontColor['brand-1e'];
      const classes = checkDirective();
      expect(classes).toContain('color-brand-1e');
    });

    it("should add color- when the font color is ''", () => {
      component.color = '';
      const classes = checkDirective();
      expect(classes).toContain('color-');
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
    TestBed.resetTestingModule();
  });
});
