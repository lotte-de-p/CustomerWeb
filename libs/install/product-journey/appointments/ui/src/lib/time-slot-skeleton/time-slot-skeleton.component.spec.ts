import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeSlotSkeletonComponent } from './time-slot-skeleton.component';

describe('TimeSlotSkeletonComponent', () => {
  let component: TimeSlotSkeletonComponent;
  let fixture: ComponentFixture<TimeSlotSkeletonComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
