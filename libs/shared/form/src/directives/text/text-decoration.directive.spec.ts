import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { TextDecorationDirective } from './text-decoration.directive';

@Component({
  template: '<i [tgTextDecoration]="$any(textDecoration)">some content</i>',
})
class TestComponent {
  @Input() textDecoration: 'line-through' | 'strike-trough';
}

describe('IconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TextDecorationDirective, TestComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should have no classes', () => {
      checkDirective(0);
    });

    it('should add text decoration striketrough', () => {
      component.textDecoration = 'strike-trough';
      const classes = checkDirective(1);
      expect(classes[0]).toContain('text-decoration--strike-trough');
    });

    function checkDirective(size: number) {
      fixture.detectChanges();
      const i: HTMLElement = fixture.nativeElement.querySelector('i');
      const classes = i.classList;
      expect(classes.length).toBe(size);
      return classes;
    }
  });
});
