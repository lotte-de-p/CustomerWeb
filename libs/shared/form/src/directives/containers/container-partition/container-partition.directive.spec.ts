import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ContainerPartitionDirective } from './container-partition.directive';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

@Component({
  template:
    '<div tgContainerPartition [firstItem]="firstItem" [lastItem]="lastItem" [inverted]="inverted" [dashed]="dashed" [noBorders]="noBorders" [noPadding]="noPadding">some content</div>',
})
class TestComponent {
  @Input() firstItem: boolean;
  @Input() lastItem: boolean;
  @Input() inverted: boolean;
  @Input() dashed: boolean;
  @Input() noBorders: boolean;
  @Input() noPadding: boolean;
}

const containerPartitionedPartition = 'Container--partitioned--partition';
describe('ContainerPartitionDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ContainerPartitionDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    // initial binding
  }));

  describe('AddClasses', function () {
    it('should add a partition class', () => {
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(1);
      expect(classes).toContain(containerPartitionedPartition);
    });

    it('should add a partitioned container class with first item', () => {
      component.firstItem = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain(containerPartitionedPartition);
      expect(classes).toContain('Container--partitioned--partition--first-item');
    });

    it('should add a partitioned container with last item class', () => {
      component.lastItem = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain(containerPartitionedPartition);
      expect(classes).toContain('Container--partitioned--partition--last-item');
    });

    it('should add a bordered container class', () => {
      component.inverted = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain(containerPartitionedPartition);
      expect(classes).toContain('Container--partitioned--partition--inverted');
    });

    it('should add a dashed container class', () => {
      component.dashed = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain(containerPartitionedPartition);
      expect(classes).toContain('Container--partitioned--partition--dashed');
    });

    it('should add a no-padding container class', () => {
      component.noPadding = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain(containerPartitionedPartition);
      expect(classes).toContain('Container--partitioned--partition--no-padding');
    });

    it('should add a no-borders container class', () => {
      component.noBorders = true;
      fixture.detectChanges();
      const div: HTMLElement = fixture.nativeElement.querySelector('div');
      const classes = div.classList;
      expect(classes.length).toBe(2);
      expect(classes).toContain(containerPartitionedPartition);
      expect(classes).toContain('Container--partitioned--partition--no-borders');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
