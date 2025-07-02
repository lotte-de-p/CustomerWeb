import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContainerDirective } from './container.directive';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

@Component({
  template:
    '<div tgContainer [bordered]="bordered" [partitioned]="partitioned" [padding]="padding" [shadow]="shadow" [cursor]="cursor">some content</div>',
})
class TestComponent {
  @Input() partitioned = false;
  @Input() padding = 2;
  @Input() shadow = true;
  @Input() bordered = false;
  @Input() cursor = false;
}

describe('ContainerDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ContainerDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add a container class', () => {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain('Container');
      expect(classes).toContain('Container--shadow--to-delete');
    });

    it('should add a partitioned container class', () => {
      component.partitioned = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(3);
      expect(classes).toContain('Container');
      expect(classes).toContain('Container--partitioned');
    });

    it('should add a bordered container class', () => {
      component.bordered = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(3);
      expect(classes).toContain('Container');
      expect(classes).toContain('Container--bordered');
    });

    it('should add a cursor container class', () => {
      component.cursor = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(3);
      expect(classes).toContain('Container');
      expect(classes).toContain('cursor--pointer');
    });

    it('should add a shadow container class', () => {
      component.shadow = false;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(1);
      expect(classes).toContain('Container');
      expect(classes).not.toContain('Container--shadow');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
