import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmProfileOverviewSkeletonComponent } from './pm-profile-overview-skeleton.component';
import { windowFactory } from '@telenet/ng-lib-page';

describe('PmProfileOverviewSkeletonComponent', () => {
  let component: PmProfileOverviewSkeletonComponent;
  let fixture: ComponentFixture<PmProfileOverviewSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmProfileOverviewSkeletonComponent],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmProfileOverviewSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
