import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { TextFlowDirective } from './text-flow.directive';

@Component({
  template: '<i [tgTextFlow]="textFlow">some content</i>',
})
class TestComponent {
  @Input() textFlow: 'body' | 'h1' | 'h3' | 'h4' | 'legal' | 'label' | 'detail' | 'details' | 'button';
}

describe('IconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TextFlowDirective, TestComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should have no classes', () => {
      checkDirective(0);
    });

    it('should add text-flow and text-flow---label', () => {
      component.textFlow = 'label';
      const classes = checkDirective(2);
      expect(classes[0]).toContain('text-flow');
      expect(classes[1]).toContain('text-flow--label');
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
