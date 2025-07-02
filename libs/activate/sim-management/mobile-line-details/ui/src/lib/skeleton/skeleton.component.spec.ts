import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimManagementSkeletonComponent } from './skeleton.component';

describe('SimManagementSkeletonComponent', () => {
  let component: SimManagementSkeletonComponent;
  let fixture: ComponentFixture<SimManagementSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimManagementSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
