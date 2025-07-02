import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { PaddingDirective, PaddingOptions, PaddingPositions, PaddingSize } from './padding.directive';

@Component({
  template: '<div [tgPadding]="padding">some content</div>',
})
class TestComponent {
  @Input() padding: PaddingOptions | PaddingOptions[];
}

describe('PaddingDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [PaddingDirective, TestComponent],
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
      component.padding = {
        size: PaddingSize.small,
        position: PaddingPositions.top,
      };
      const classes = checkDirective();
      expect(classes.length).toBe(1);
      expect(classes).toContain('pt--s');
    });

    it('should add m when left margin is medium and top', () => {
      component.padding = {
        size: PaddingSize.medium,
        position: PaddingPositions.top,
      };
      const classes = checkDirective();
      expect(classes.length).toBe(1);
      expect(classes).toContain('pt--m');
    });

    it('should add m when left margin is medium', () => {
      component.padding = {
        size: PaddingSize.medium,
      };
      const classes = checkDirective();
      expect(classes.length).toBe(1);
      expect(classes).toContain('p--m');
    });

    it('should add m when left margin is medium and top', () => {
      component.padding = [
        {
          size: PaddingSize.medium,
          position: PaddingPositions.top,
        } as PaddingOptions,
        {
          size: PaddingSize.small,
        } as PaddingOptions,
      ];
      const classes = checkDirective();
      expect(classes.length).toBe(2);
      expect(classes[0]).toContain('pt--m');
      expect(classes[1]).toContain('p--s');
    });

    function checkDirective() {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      return div.classList;
    }
  });
});
